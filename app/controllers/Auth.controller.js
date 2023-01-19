const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");

exports.loginPage = async (req, res) => {
  try {
    // Find the user in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare the user's entered password with the hashed password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });

    // Send the token as a response
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    // Verify the token
    const decoded = jwt.verify(req.body.token, process.env.REFRESH_TOKEN_SECRET);

    // Check if the token is expired
    if (decoded.exp < Date.now() / 1000) {
      // Create a new JWT token
      const token = jwt.sign({ id: decoded.id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: 86400, // expires in 24 hours
      });

      // Send the new token as a response
      return res.status(200).json({ token });
    }

    // Send the original token as a response
    res.status(200).json({ token: req.body.token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
