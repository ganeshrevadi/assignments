const jwtPassword = 'secret';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  if (req.header.admin == true) {
    next()
  }
  else {
    res.status(404).json({
      message: "Invalid Login"
    })
  }
}

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, jwtPassword, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    req.admin = admin;
    next();
  });
};

module.exports = adminMiddleware;
