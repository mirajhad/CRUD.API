exports.verifyToken = async (req, res, next) => {
    try {
    // Get the token from the headers
    const token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Check if the user exists
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    // Add the user to the request object
    req.user = user;
    next();
    } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
    }
};

