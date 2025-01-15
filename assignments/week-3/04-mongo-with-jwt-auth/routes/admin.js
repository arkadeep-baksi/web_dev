const jwt = require("jsonwebtoken")
const { Router } = require("express");
const bodyParser = require("body-parser");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const { JWT_Secret } = require("../db");
const router = Router();

router.use(bodyParser.json());

// Admin Routes
router.post('/signup', async (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username : username,
        password : password
    });
    if (admin){
        res.json({
            "mssg" : "Admin account already exists !!"
        });
    }
    else{
        await Admin.create({
            username : username,
            password : password
        });
        res.status(200).json({
            "mssg" : "Admin account created successfully !!"
        });
    }

})

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username : username,
        password : password
    });

    if (admin){

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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const value = await Course.create({
        title:  title,
        description: description,
        price: price,
        imageLink: imageLink
    });

    res.status(200).json({
        "message": 'Course created successfully',
        "courseId": value._id
    });
})

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const value = await Course.find({});
    res.status(200).json({
        "course": value
    });
})

router.use(function(err, req, res, next){

    console.log(err)
    res.status(500).send("Internal Server Error");
    
})

module.exports = router;