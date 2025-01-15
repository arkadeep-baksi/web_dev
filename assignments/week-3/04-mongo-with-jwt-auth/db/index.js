// Import mongoose, zod
const zod = require("zod");
const mongoose = require("mongoose");
const { MongoParseError } = require("mongodb");
const JWT_Secret = "arkadeep@jwt"

// Connect to the Mongodb Database
mongoose.connect("mongodb+srv://rik21091997:149AXGEHNISEnQAR@cluster0.g26c4.mongodb.net/courses?retryWrites=true&w=majority&appName=Cluster0",);

// Define the schemas
// By default, Mongoose uses the pluralized, lowercase version of youre Model name as the table name
// If your collection name doesn't follow the same pattern, mention the collection/table name in the Schema itself

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
}, {collection : 'Admins'})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
} , {collection : 'Users'})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
}, {collection : 'Courses'})

const Admin = mongoose.model('Admins', adminSchema);
const User = mongoose.model('Users', UserSchema);
const Course = mongoose.model('Courses', courseSchema);

module.exports = {
    Admin,
    User,
    Course,
    JWT_Secret
}