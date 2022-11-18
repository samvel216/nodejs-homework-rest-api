const {User} = require("../models/user");
const {Conflict} = require("http-errors");
const bcrypt = require("bcryptjs");

const gravatar = require("gravatar");


  const register = async (req, res) => {
  const {name,email,password} = req.body;
  const user = await User.findOne({email});
  if (user) {
    throw new Conflict(`User with ${email} already exist`)
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const result = await User.create({name,email,password: hashPassword,avatarURL})
  res.status(201).json({
    result
  });
   }
   module.exports = register;