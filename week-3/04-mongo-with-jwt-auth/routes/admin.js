const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express");
const { Admin, Course } = require("../db");
const app = express();
const jwt = require("jsonwebtoken")
app.use(express.json());

// Admin Routes
app.post("/signup", (req, res) => {
  const user = Admin.create({
    username: req.body.username,
    password: req.body.password
  })
  const token = jwt.sign(user, jwtPassword)
  res.json({
    token: token,
    message: `Admin created sucessfully`
  })

});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  })

});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then(courses => {
    res.json(courses)
  })
});

module.exports = router;
