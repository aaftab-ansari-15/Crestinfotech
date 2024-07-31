const express = require("express");
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Define route for user creation of user uisng post, no login required
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

    try {
      // Create a new user object
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // Ensure you hash the password before saving in a real-world application
      });

      // Save the user to the database
      const savedUser = await user.save();

      // Respond with the created user
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
