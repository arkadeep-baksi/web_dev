const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const cors = require("cors");

app = express();
app.use(cors());

app.get("/sum", function(req, res){

    const firstNumber = req.query.a;
    const secondNumber = req.query.b;

    const ans = parseInt(firstNumber)+parseInt(secondNumber);
    //Have to stringify the ans, else express thinks the number as a status code !!
    res.status(200).send(ans.toString());
})

app.get("/interest", function(req, res){

    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    const interest = (principle*rate*time)/100;
    //Have to stringify the ans, else express thinks the number as a status code !!
    res.status(200).send(interest.toString());
})

app.use(function(err, req, res, next){
    res.send(err);
})

app.listen(port, function(){
    console.log("Starting sum server at port: " + port);
})