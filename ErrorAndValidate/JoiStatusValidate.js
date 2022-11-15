const Joi = require("joi");
    const addStatusSchema = Joi.object({
        favorite: Joi.boolean(),
    });

module.exports = addStatusSchema;