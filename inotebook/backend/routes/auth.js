const express = require("express");
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const JWT_SEC = "good$times";
//Routesample
router.get("/", () => {
  console.log("auth in");
});

// Rout1: Define route for user creation of user uisng post, no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    try {
      // Create a new user object
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: secPass, // Ensure you hash the password before saving in a real-world application
      });
      const data = {
        id: user.id,
      };
      const authtoken = jwt.sign(data, JWT_SEC);
      // Save the user to the database
      const savedUser = await user.save();

      // Respond with the created user
      // res.status(201).json(savedUser);
      res.json({ authtoken });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

//Route2:login user, no login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters long").exists(),
  ],
  async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "bad credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ errors: "bad credentials" });
      }
      const data = {
        id: user.id,
      };
      const authtoken = jwt.sign(data, JWT_SEC);

      res.json({ authtoken });
    } catch (error) {
      console.error("bad credentials", error);
      res.status(500).json({ error: "bad credentials" });
    }
  }
);

//Route3: get logedin user details, login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    console.log(req.user.id);
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
