const Joi = require('joi');

class userReadBooksValidator {
    static async create ({book_id, whichPage, rating}) {
        const {error} = Joi.object({
            book_id: Joi.string().required(),
            whichPage: Joi.number().required(),
            rating: Joi.number().required()
        }).validate({book_id, whichPage, rating});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    }
}

module.exports = userReadBooksValidator;