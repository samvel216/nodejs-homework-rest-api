const {Contact} = require("../models/contact");

const RequestError = require("../ErrorAndValidate/RequestError");

 const getAll = async (req, res) => {
        const result = await Contact.find({});
          if (!result) {
             throw RequestError(404, "Not found");
          }
        res.json(result);
}
module.exports = getAll;