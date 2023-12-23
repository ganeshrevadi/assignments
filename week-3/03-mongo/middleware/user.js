function userMiddleware(req, res, next) {
  if (req.headers.user === "true") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = userMiddleware;
