const jwt = require("jsonwebtoken")
const { Router } = require("express");
const bodyParser = require("body-parser");
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");
const { JWT_Secret } = require("../db");
const router = Router();

router.use(bodyParser.json());

// User Routes
router.post('/signup', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username : username,
        password : password
    });
    if (user){
        res.json({
            "mssg" : "User account already exists !!"
        });
    }
    else{
        await User.create({
            username : username,
            password : password
        });
        res.status(200).json({
            "mssg" : "User account created successfully !!"
        });
    }

});

router.post('/signin', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username : username,
        password : password
    });

    if (user){

        const jwt = jwt.sign({username}, JWT_Secret);
        res.status(200).json({
            "token" : "Bearer" + " " + jwt
        });
        
    }else{
        res.status(411).json({
            "mssg" : "Invalid username or password !!"
        });
    }

})

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const value = await Course.find({});
    res.status(200).json({
        "course": value
    });

})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username : username
    }, {
        "$push" : {
            purchasedCourses : courseId
        }
    });

    res.status(200).json({
        "mssg" : "Course Purchased successfully !!"
    });


})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    const value = await User.findOne({
        username : username
    });
    
    const response = await Course.find({
        _id : {
            "$in" : value.purchasedCourses
        }
    })
    res.status(200).json({
        "courses" : response
    });
})

router.use(function(err, req, res, next){

    console.log(err)
    res.status(500).send("Internal Server Error");
    
})

module.exports = router