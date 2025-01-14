const { Router } = require("express");
const { User } = require("../db");
const { Course } = require("../db");
const bodyParser = require("body-parser");
const userMiddleware = require("../middleware/user");

const router = Router();
router.use(bodyParser.json());

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.headers.username;
    const password = req.headers.password;

    // Check if the user already exists
    User.findOne({
        username : username,
        password : password
    }).then(function (value){
        // If user exists
        if (value){
            res.json({
                "mssg" : "User already exists !!"
            });
        } // If user does not exist, then create a new account
        else{
            User.create({
                username : username,
                password : password
            }).then(function (){
                res.status(200).json({
                    "mssg" : "User Account created successfully !!"
                });
            });
        }
    });
})

router.get('/courses', (req, res) => {
    // Implement listing all courses logic

    Course.find({}).then(function (value){
        res.status(200).json({
            "course": value
        });
    });

})

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne({
        username : username
    }, {
        "$push" : {
            purchasedCourses : courseId
        }
    }).then(function (){
        res.status(200).json({
            "mssg" : "Course Purchased successfully !!"
        });
    });

})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username : username
    }).then(function (value){
        console.log(value.purchasedCourses);
        Course.find({
            _id : {
                "$in" : value.purchasedCourses
            }
        }).then(function (response){
            res.status(200).json({
                "courses" : response
            });
        });
    });
    
})

router.use(function(err, req, res, next){

    console.log(err)
    res.status(500).send("Internal Server Error");
    
})

module.exports = router