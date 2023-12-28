const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express");
const { Admin, Course } = require("../db");
const app = express();

app.use(express.json());

// Admin Routes
<<<<<<< HEAD
app.post("/signup", (req, res) => {
  Admin.create({
    username: req.body.username,
    password: req.body.password
  })

  res.json({
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
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> 44221a6567c34bcb8321268b6c0180e2a2a48d63
});

module.exports = router;
