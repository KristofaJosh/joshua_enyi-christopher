const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    
    let token = req.headers['x-access-token'] || req.headers['authorization'] || req.body.variables && req.body.variables['token'];
    
    if (token) {
        token = token.split(' ')[1]; // Remove Bearer from string
        
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (err) {
                req.isAuth = {state: false, message: "Invalid token"};
                next()
            } else {
                if (decoded.username === "Chris Josh") {
                    req.isAuth = {state: true, message: "logged in"};
                    next();
                }
            }
        });
    }
    
    if (!token) {
        req.isAuth = ({state: false, message: "No token supplied"});
        next();
    }
    
};