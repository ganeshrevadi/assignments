const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db");
const express = require("express")
const app = express()
// User Routes
<<<<<<< HEAD
app.post('/signup', userMiddleware, (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: `Admin created sucessfully`,
  });

});

app.get('/courses', userMiddleware, (req, res) => {
  // Implement listing all courses logic
  Course.find().then(courses => {
    res.json(courses)
  })

});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {
  try {
    // Assuming you're passing course details in the request body
    const { title, description, price, image } = req.body;

    // Create a new course in the database
    const newCourse = await Course.create({
      title,
      description,
      price,
      image,
    });

    res.json({ message: 'Course purchased successfully', courseId: newCourse._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to implement fetching purchased courses logic
app.get('/purchasedCourses', userMiddleware, async (req, res) => {
  try {
    // Fetch the courses purchased by the user from the database
    const purchasedCourses = await Course.find({}); // Adjust the query based on your schema and requirements

    res.json({ purchasedCourses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
>>>>>>> 44221a6567c34bcb8321268b6c0180e2a2a48d63
});

module.exports = router