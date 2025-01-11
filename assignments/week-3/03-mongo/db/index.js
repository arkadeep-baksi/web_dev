// Import mongoose, zod
const zod = require("zod");
const mongoose = require("mongoose");

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
    name: String,
    price: parseFloat
})

// const AdminSchema = new mongoose.Schema({
//     // Schema definition here
// });

// const UserSchema = new mongoose.Schema({
//     // Schema definition here
// });

// const CourseSchema = new mongoose.Schema({
//     // Schema definition here
// });

// const Admin = mongoose.model('Admin', AdminSchema);
// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);

// module.exports = {
//     Admin,
//     User,
//     Course
// }