const {Contact} = require("./contacts");
const getAll = async (req,res) => {
    const contacts = await Contact.find();
    res.json(contacts);
    return contacts;
}
module.exports = getAll;