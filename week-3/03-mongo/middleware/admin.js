// Middleware for handling auth
function adminMiddleware(req, res, next) {
  if (req.headers.admin === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = adminMiddleware;
