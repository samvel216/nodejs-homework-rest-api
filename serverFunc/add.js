
const {Contact} = require("../models/contact");
const addSchema = require("../ErrorAndValidate/JoiValidate");

const add = async (req, res, next) => {
 const {error} = addSchema.validate(req.body);
 if (error){
   error.status = 400;
   throw error;
  }
const result = await Contact.create(req.body);
res.status(201).json(result);
}
module.exports = add;