const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");
const express = require("express")
const app = express()
// User Routes
// Route to implement fetching purchased courses logic
router.post('/signup', (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password
  })
    .then(function() {
      res.json({
        message: 'User Created Sucessfully'
      })
    })

});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response
  })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne({
    username: username
  },
    {
      "$push": {
        purchasedCourses: courseId
      }

    })

  res.json({
    message: "Purchase Complete"
  })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      "$in": user.purchasedCourses
    }
  });

  res.json({
    courses: courses
  })
});

module.exports = router
