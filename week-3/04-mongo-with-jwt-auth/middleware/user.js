function userMiddleware(req, res, next) { // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  if (req.header.user == true) {
    next()
  }
  else {
    res.status(404).json({
      message: "Invalid Login"
    })
  }
    
}

module.exports = userMiddleware;
