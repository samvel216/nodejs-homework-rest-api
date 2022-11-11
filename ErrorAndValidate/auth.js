const {User} = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "DIBNTHDjdggfgfg";
const auth = async (req, res) => {
const {authorization = ""} = req.headers;
const [bearer, token] = authorization.split(" ");
if (bearer !== "Bearer") {
    throw new Unauthorized("Це пизда")
}
try {
    const {id} = jwt.verify(token, SECRET_KEY)
   }   catch(error) {
   error.status = 401;
    }

}
module.exports = auth;