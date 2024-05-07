const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
    unique: true,
    default: uuid.v4,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friendRequests: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

// Custom method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
