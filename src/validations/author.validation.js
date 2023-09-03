const Joi = require('joi');

class authorValidator {
    static async create ({first_name, last_name, birth_date, death_date, country, bio, photo_url}) {
        const {error} = Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            birth_date: Joi.date().required(),
            death_date: Joi.date().required(),
            country: Joi.string().required(),
            bio: Joi.string().required(),
            photo_url: Joi.required()
        }).validate({first_name, last_name, birth_date, death_date, country, bio, photo_url});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
}

module.exports = authorValidator;