const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();

// Middleware for parsing request body
app.use(bodyParser.json());

// Express Hello World
app.get('/', function(req, res){
    res.send('Hello World');
});

app.post('/conversation', function(req, res){
    console.log(req.body);
    console.log(req.query.message);
    console.log(req.headers["authorization"]);
    res.send("Received message !!");
});

app.listen(port, function(){
    console.log("Started server at port:" + port);
});