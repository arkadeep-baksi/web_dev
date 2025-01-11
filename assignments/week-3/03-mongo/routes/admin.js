const { Router } = require("express");
import { Admin } from "../db";
import { Course } from "../db";
const bodyParser = require("body-parser");
const adminMiddleware = require("../middleware/admin");
const router = Router();

app.use(bodyParser.json());

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const admin = new Admin({
        username: username,
        password: password
    })
    admin.save();
    res.status(200).send("Admin created successfully");
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

    const username = req.body.username;
    const password = req.body.password;

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = new Course({
        title:  title,
        description: description,
        price: price,
        imageLink: imageLink
    });
    course.save();
    const course_data = Course.find({title:title, description:description});

    res.status(200).json({
        "message": 'Course created successfully',
        "courseId": course_data[0]._id
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    const courses = Course.find({});
    res.status(200).json({
        "courses": courses
    })
});

router.use(function(err, req, res, next){

    res.status(500).send("Internal Server Error");
    
})

module.exports = router;