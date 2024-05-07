const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./schema/User");

// Configure Passport strategy
passport.use(
  new LocalStrategy({ usernameField: "email" }, async function verify(
    email,
    password,
    cb
  ) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return cb(null, false, { message: "Incorrect email or password." });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return cb(null, false, { message: "Incorrect email or password." });
      }

      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);

// Configure Passport session management
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user._id, email: user.email });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;
