const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../../controller/userController");
const passport = require("../../passport.config");
//-------------------------------------------------------create user--------------------------------------------------------------------------------------------//
router.post("/create_user", async (req, res) => {
  try {
    const { userId, email, password } = req.body;
    console.log(req.body);
    let userInit = {
      email: email,
      password: password,
      userId: userId,
    };
    await createUser(userInit);
    res.status(200).json({
      message: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "an err accured in creating user" + error,
    });
  }
});

//-------------------------------------------------------login--------------------------------------------------------------------------------------------//
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: 200 });
});
//-------------------------------------------------------get user by email--------------------------------------------------------------------------------------------//
router.get("/get_user_by_email", async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await getUser(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user.userId);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
