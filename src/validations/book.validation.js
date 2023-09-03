const Joi = require('joi');

class bookValidator {
    static async create ({title, pages, year, price, country, description, author_id, category_id, photo_url}) {
        const {error} = Joi.object({
            title: Joi.string().required(),
            pages: Joi.number().required(),
            year: Joi.number().required(),
            price: Joi.number().required(),
            country: Joi.string().required(),
            description: Joi.string().required(),
            author_id: Joi.string().required(),
            category_id: Joi.string().required(),
            photo_url: Joi.required()
        }).validate({title, pages, year, price, country, description, author_id, category_id, photo_url});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
}

module.exports = bookValidator;