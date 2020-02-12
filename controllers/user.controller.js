const User = require('../models/user.model.js');
const Token = require('../models/token.model.js');

exports.signup = async(req, res) => {
    var user = new User(req.body);
    user = await user.save();
    var token = new Token({userid:user._id});
    token = await token.save();
    res.header("authorization", token._id);
    res.status(200).send(user);
}

exports.signin = async(req, res) => {
//TODO
}

exports.retrieveuser = async(req, res) => {
    var user = await User.findById(req.userid);
    if(!user) {
        //
    }
    res.status(200).send(user);
}