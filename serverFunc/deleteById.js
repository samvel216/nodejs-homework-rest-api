const {Contact} = require("../models/contact");

const RequestError = require("../ErrorAndValidate/RequestError");

const deleteByld = async (req, res, next) => {
      const {id} = req.params;
      const result = await Contact.findByIdAndDelete(id);
      if (!result) {
         throw RequestError(404, "Not found");
       }
      res.json({message: "contact deleted"});  
  }

  module.exports = deleteByld;