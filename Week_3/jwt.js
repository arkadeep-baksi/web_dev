const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const jwtPassword = "123456";
const port = process.env.PORT || 3000;

// Get express object
const app = express();
// Use bodyParser middleware
app.use(bodyParser.json());

// In-memory DB
const ALL_USERS = [
    {
      username: "arkadeep@gmail.com",
      password: "123",
      name: "Arkadeep Baksi",
    },
    {
      username: "ajoy@gmail.com",
      password: "123321",
      name: "Ajoy Baksi",
    },
    {
      username: "anima@gmail.com",
      password: "123321",
      name: "Anima Baksi",
    },
  ];

function userExists(username, password) {
// write logic to return true or false if this user exists
// in ALL_USERS array

    let userExists = ALL_USERS.find(function(x){
        return x.username == username && x.password == password;
    })
    if (userExists === undefined){
        return false;
    }
    else{
        return true;
    }
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
        msg: "User doesnt exist in our in memory db",
        });
        // Stop execution and return from callback
        return;
    }
    // Don't use the user password here as anyone can actually decode or see the password from jwt
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        return res.json({
            Users: ALL_USERS.filter(function(x){
                return x.username != username;
            })
        });
    } catch (err) {
        return res.status(403).json({
        msg: "Invalid token",
        });
    }
});

// Start the server at the defined port
app.listen(port, function(){
console.log("Started server at port:" + port);
});
