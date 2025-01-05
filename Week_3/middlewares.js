// Import the necessary libraries
const express = require("express");
const bodyParser = require("body-parser");

// Set the prt number
const port = process.env.PORT || 3000;
app = express();
app.use(bodyParser.json());

// Routes
app.get("/health-checkup", function(req, res){

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "arkadeep" || password != "123"){
        res.status(400).json({
            "mssg" : "Something is wrong with your credentials"
        });
    }
    if (kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            "mssg" : "Something is wrong with your credentials"
        });
    }

    res.status(200).json({
        "mssg" : "Everything is working."
    });
});

// Start the server at the defined port
app.listen(port, function(){
    console.log("Started server at port:" + port);
});