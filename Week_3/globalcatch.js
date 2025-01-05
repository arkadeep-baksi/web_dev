// Import the necessary libraries
const express = require("express");
const bodyParser = require("body-parser");
requests = 0;

// Set the prt number
const port = process.env.PORT || 3000;
app = express();
// If you use a middleware in all the requests, then you can put them in app.use(middleware function)
app.use(bodyParser.json());
app.use(calculateRequests);

//Middleware Functions:
function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "arkadeep" || password != "123"){
        res.status(403).json({
            "mssg" : "Something is wrong with your credentials"
        });
    }
    else{
        next();
    }
}

function kidneyMiddleware(req, res, next){

    const kidneyId = req.query.kidneyId;

    if (kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            "mssg" : "Wrong KidneyID"
        });
    }
    else{
        next();
    }
}

function calculateRequests(req, res, next){
    requests+=1;
    console.log("Current numbetr of requests: "+ requests);
    next();
}

// Routes
// Naive way of validating the user and some other params
app.get("/naive-health-checkup", function(req, res){

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "arkadeep" || password != "123"){
        res.status(403).json({
            "mssg" : "Something is wrong with your credentials"
        });
    }
    if (kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            "mssg" : "Invalid Kidney ID"
        });
    }

    res.status(200).json({
        "mssg" : "You are healthy !!"
    });
});

//Middlewares
// In express, there can be multiple callbacks instead of just one after the route: Eg-> app.get("/", cb1(req, res, next), cb2(req, res, next), ...)
// The control from cb1 to cb2 reaches by calling next() function call- Express does the work of moving the control to the next callback.
// Middlewares use this concept to validate things 

app.get("/test-multiple-callbacks", function first(req, res, next){
    console.log("Inside the first callback");
    next();
}, function second(req, res, next){
    console.log("Inside the second callback");
    next();
}, function (req, res){
    res.send("Tested successfully");
})

// Middlewared route handler
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.status(200).json({
        "mssg" : "You are healthy !!"
    });
})

app.post("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    const kidneys = req.body.kidneys
    res.status(200).json({
        "mssg" : "You are have " + kidneys + " kidneys !!"
    });
})

// Global catches: Error middlewares- Should be after all the other route handlers
app.use(function(err, req, res, next){
    res.send("Something is wrong with the server")
})
// Start the server at the defined port
app.listen(port, function(){
    console.log("Started server at port:" + port);
});