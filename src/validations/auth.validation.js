const Joi = require('joi');

class authValidator {
    static async register ({first_name, last_name, phone_number, email, password}) {
        const {error} = Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            phone_number: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        }).validate({first_name, last_name, phone_number, email, password})
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };

    static async login ({email, password}) {
        const {error} = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        }).validate({email, password});
        if (error) {
            return {error};
        }
        else {
            return {error: false};
        }
    };
    static async changePassword ({email, password, newPassword, confirmPassword}) {
        const {error} = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
            newPassword: Joi.string().required(),
            confirmPassword: Joi.string().required()
        }).validate({email, password, newPassword, confirmPassword});
        if (error) {
            return {error}
        }
        else {
            return {error: false}
        }
    };
    static async updateBalance ({amount}) {
        const {error} = Joi.object({
            amount: Joi.number().required()
        }).validate({amount});
        if (error) {
            return {error};
        }
        else {
            return {error: false}
        }
    }
}

module.exports = authValidator;