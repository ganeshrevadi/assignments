const mongoose = require('mongoose');

// Connect to MongoDB

const db = mongoose.connect('mongodb+srv://admin:7n8hmhd8kw@cluster0.qp9lisl.mongodb.net/');
db.then(() => {
  console.log("Mongo Connected Sucessfull!!")
})


// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
  Course
}
