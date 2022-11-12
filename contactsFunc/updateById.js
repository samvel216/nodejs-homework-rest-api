
const {Contact} = require("../models/contact");

const addSchema = require("../middlewares/JoiValidate");

const updateByld = async (req, res, next) => {
      const {error} = addSchema.validate(req.body);
      if (error){
        error.status = 400;
        throw error;
      }
      const {id} = req.params;
      const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
      res.json(result);
  }

module.exports = updateByld;