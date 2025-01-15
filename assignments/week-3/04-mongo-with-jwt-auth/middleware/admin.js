// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_Secret} = require("../db");

function adminMiddleware(req, res, next) {
    
    const token = req.headers.authorization;
    // Remove the Bearer word
    const jwtToken = token.split(" ")[1]; 
    const decodedValue = jwt.verify(jwtToken, JWT_Secret);
    if (decodedValue.username){
        next();
    }else{
        res.status(403).json({
            "mssg": "You are not authenticated !!"
        });
    }
}

module.exports = adminMiddleware;