const {User} = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "DIBNTHDjdggfgfg";
const auth = async (req, res,next) => {
const {authorization = ""} = req.headers;
const [bearer, token] = authorization.split(" ");
try {
    if (bearer !== "Bearer") {
        throw new Unauthorized("Це пизда");
    }
    const {id} = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id); 
    if (!user) {
        throw new Unauthorized("Це пизда по id");
    }
    req.user = user;
    next();
   }   catch(error) {
    if (error.message === "Invalid sugnature") {
        error.status = 401;
    }
     next(error);
    }
}
module.exports = auth;