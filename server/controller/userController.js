const User = require("../schema/User");

module.exports = {
  createUser: async (user) => {
    try {
      const newUser = new User(user);
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  },
  getUser: async (email) => {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  },
  getUserById: async (id) => {
    return await User.findById(id);
  },
};
