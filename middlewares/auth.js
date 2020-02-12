const Token  = require('../models/token.model.js')

module.exports = async function(req, res, next) {
    var token = req.headers["authorization"];
    if(!token) {
        return res.send({Message: "no token provided"});
    }
    token = await Token.findById(token);
    if(!token) {
        return res.send({Message: "invalid token"});
    }

    //set here so next function can access the userid by calling
    //req.userid
    req.userid = token.userid;
    next();
}