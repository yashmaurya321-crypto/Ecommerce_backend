const jwt = require('jsonwebtoken');

const AuthController = (req, res, next) => {
    const authHeader = req.headers['Authorization'] || req.headers['authorization'];
    if (authHeader == null) return res.sendStatus(401); 

    const token = authHeader.split(' ')[1]; 
   
    jwt.verify(token, "yash", (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user; 
        next();
    });
};

module.exports = AuthController;
