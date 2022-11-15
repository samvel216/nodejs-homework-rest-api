const {Contact} = require("../models/contact");

const addStatusSchema = require("../ErrorAndValidate/JoiStatusValidate");

const updateStatusContact = async (req, res, next) => {
       const {error} = addStatusSchema.validate(req.body);
       if (error){
         error.status = 400;
         throw error;
       }
      const {id} = req.params;
      const {favorite} = req.body;
      const result = await Contact.findByIdAndUpdate(id, {favorite}, { new: true });
      res.json(result);
  }

module.exports = updateStatusContact;