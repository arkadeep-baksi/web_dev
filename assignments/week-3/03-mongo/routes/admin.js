const { Router } = require("express");
const { Admin } = require("../db");
const { Course } = require("../db");
const bodyParser = require("body-parser");
const adminMiddleware = require("../middleware/admin");

const router = Router();
router.use(bodyParser.json());

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists in the database. If not only then create a new account
    Admin.findOne({
        username : username,
        password : password
    }).then(function(value){
        if(value){
            res.json({
                "mssg": "User already exists"
            });
        }
        else{
            // User does not exist in the database
            Admin.create({
                username : username,
                password : password
            }).then(function(){
                res.status(200).json({
                    "mssg" : "User Account created successfully"
                });
            });
        }
    });
})

router.post('/courses', adminMiddleware, (req, res) => {
    
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    Course.create({
        title:  title,
        description: description,
        price: price,
        imageLink: imageLink
    }).then(function(value){

        res.status(200).json({
            "message": 'Course created successfully',
            "courseId": value._id
        });
    });

})

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    Course.find({}).then(function (value){
        res.status(200).json({
            "course": value
        });
    });
})

router.use(function(err, req, res, next){

    res.status(500).send("Internal Server Error");
    
})

module.exports = router;