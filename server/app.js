require("dotenv").config();
//imports
const express = require("express");
const app = express();
const session = require("express-session");
const authRoutes = require("./routes/auth/api");
const chatRoutes = require("./routes/chat/api");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimitter = require("./middleware/ratelimiter");
const passport = require("./passport.config");
const port = process.env.SERVER_PORT || 3001;
const databaseConnection = require("./db.comfig");
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//-ratelimitter middleware
app.use(rateLimitter);

//-helmet middleware
app.use(helmet());

//-session middleware
app.use(
  session({
    secret: process.env.EXPRESS_SESSION,
    resave: false,
    saveUninitialized: true,
  })
);
//-passport middleware
app.use(passport.initialize());
app.use(passport.session());

//general configs

//database connection
databaseConnection();

//app use routes
app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

//server
app.listen(port, () => {
  console.log("\x1b[42m%s\x1b[0m", `server is litening on localhost:${port}`);
});
