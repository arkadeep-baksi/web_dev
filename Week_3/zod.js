// Import the necessary libraries
const express = require("express");
const bodyParser = require("body-parser");
const zod = require("zod");

// Schemas
const schema = zod.array(zod.number());
const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
});

// Set the prt number
const port = process.env.PORT || 3000;
app = express();
// If you use a middleware in all the requests, then you can put them in app.use(middleware function)
app.use(bodyParser.json());

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

// Middlewared route handler
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.status(200).json({
        "mssg" : "You are healthy !!"
    });
});

app.post("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    const kidneys = req.body.kidneys
    //Validating the user input using zod
    const response = schema.safeParse(kidneys);
    console.log(response);
    if (!response.success){
        res.status(411).json({
            "mssg": response
        });
    }
    else{
        res.send(200).json({
            "mssg": "You are healthy !!"
        });
    }
});

// Global catches: Error middlewares- Should be after all the other route handlers
app.use(function(err, req, res, next){
    res.send("Something is wrong with the server")
});

// Start the server at the defined port
app.listen(port, function(){
    console.log("Started server at port:" + port);
});