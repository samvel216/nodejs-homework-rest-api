const {User} = require("../models/user");
const {Unauthorized} = require("http-errors");
const bcrypt = require("bcryptjs");
const  SECRET_KEY  = `DIBNTHDjdggfgfg`;
const jwt = require("jsonwebtoken");

const login =  async (req, res) => {
 const {email, password} = req.body;
 const user = await User.findOne({email});
 const comparePassword = bcrypt.compareSync(password, user.password)
 if (!user) {
   throw Unauthorized("Email  wrong");
 }
 if (!comparePassword) {
   throw Unauthorized(comparePassword);
 }
 const payload = {
    id: user._id
 }
 const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"})
 await User.findByIdAndUpdate(user._id, { token });
 res.json({
   token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
 })
}

module.exports = login;