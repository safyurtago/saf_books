const Joi = require('joi');

class commentValidator {
    static async create ({book_id, title, description}) {
        const {error} = Joi.object({
            book_id: Joi.string().required(),
            title: Joi.string().required(),
            description: Joi.string().required()
        }).validate({book_id, title, description});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
}

module.exports = commentValidator;