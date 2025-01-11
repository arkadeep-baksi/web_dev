// Import mongoose, zod
const zod = require("zod");
const mongoose = require("mongoose");
const { MongoParseError } = require("mongodb");

// Connect to the Mongodb Database
mongoose.connect("mongodb+srv://rik21091997:149AXGEHNISEnQAR@cluster0.g26c4.mongodb.net/courses?retryWrites=true&w=majority&appName=Cluster0",);

// Define the schemas

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    }
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
})

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('Users', UserSchema);
const Course = mongoose.model('Courses', courseSchema);

module.exports = {

    Admin,
    User,
    Course
}