const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const jwtPassword = "123456";

// Connect to Mongo DB
mongoose.connect(
  "mongodb+srv://rik21091997:149AXGEHNISEnQAR@cluster0.g26c4.mongodb.net/users_app?retryWrites=true&w=majority&appName=Cluster0",
);
// Database Schema
const User = mongoose.model("users", {
    name: String,
    username : String,
    password : String
});
// Express object
const app = express();
// Middleware to parse req.body
app.use(bodyParser.json());


app.post("/signup", async function (req, res) {

    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const userExists = await User.findOne({username : username});
    if (userExists){
        res.status(403).json({
            "mssg": "Unable to create an account, username already exists !!"
        });
        // Stop execution and return from callback
        return;
    }

    const user = new User({
        name : name,
        username : username,
        password : password
    });

    // Store in Database
    user.save();
    res.json({
        "mssg": "Account created successfully !!"
    })
});

app.post("/signin", async function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const userExists = await User.findOne({username : username});
    if (userExists){
        const jwtToken = jwt.sign({username : username}, jwtPassword);
        res.status(200).json({
            "token" : jwtToken
        });
        // Stop execution and return from callback
        return;
    }
    else{
        res.status(403).json({
            "mssg": "Invalid username !!"
        })
        return;
    }

});

app.listen(port, function(){
    console.log("Started server at port: " + port);
})
