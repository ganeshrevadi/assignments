const adminMiddleware = require("../middleware/admin");
const express = require("express");
const { Admin } = require("../db");
const router = express.Router();

router.post('/signup', (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username,
    password
  })
    .then(function() {
      res.json({
        message: 'Admin Created Sucessfully'
      })
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = Course.create({
    title,
    description,
    imageLink,
    price
  })
    .then(function() {
      res.json({
        message: "Course created Sucessfully",
        courseId: newCourse._id
      })
    })


});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const allCourses = Course.find({})
  .then(function(){
    res.json({
      courses: allCourses
    })
  })

});

module.exports = router;
