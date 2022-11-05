const Joi = require("joi");
    const addSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string()
        .required(),
      phone: Joi.string()
        .required(),
    });

module.exports = addSchema;