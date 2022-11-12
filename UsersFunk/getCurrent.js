const { User } = require("../models/user");


const getCurrent = async (req, res) => {
    const { name, email } = req.user;
    res.json({
        data: {
            user: {
                name,
                email
            }
        }
    })
}
module.exports = getCurrent;