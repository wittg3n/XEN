const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("\x1b[42m%s\x1b[0m", "MongoDB connected successfully");
  } catch (error) {
    console.error("\x1b[41m%s\x1b[0m", "MongoDB connection error:", error);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("\x1b[42m%s\x1b[0m", "Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("\x1b[41m%s\x1b[0m", "MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("\x1b[43m%s\x1b[0m", "Disconnected from MongoDB");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("\x1b[42m%s\x1b[0m", "MongoDB connection closed successfully");
  process.exit(0);
});

module.exports = connectDB;
