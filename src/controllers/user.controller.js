
const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('../models/User.model');
const { CustomError } = require('../utils/custom-error');
const userValidator = require('../validations/auth.validation')
const Comment = require('../models/Comment.model');
const userReadBooks = require('../models/UserReadBooks.model');

const profile = async (req, res, next) => {
    try {
        const user = req.user;
            
    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
        const users = await User.findAll({include: [{model: Comment}, {model: userReadBooks}]});
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({where: {id}, include: [{model: Comment}, {model: userReadBooks}]});
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const findInfo = async (req, res, next) => {
    try {
        const user = req.user;
        delete user.password;
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const updateProfile = async (req, res, next) => {
    try {
        const id = req.user.id;
        const {first_name, last_name, phone_number, email, password } = req.body;
        const resultValidation = await userValidator.register({first_name, last_name, phone_number, email, password});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)}
        const updatedUser = await User.update({first_name, last_name, phone_number, email, password}, {where: {id}})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const updateBalance = async (req, res, next) => {
    // const trx = await sequelize.transaction()
    try {
        const user = req.user;
        const {amount} = req.body;
        
        const resultValidation = await userValidator.updateBalance({amount});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)}

        await User.update({balance: +user.balance + +amount}, {where: {id: user.id}}); // {transaction: trx}
        console.log(1);
        // await trx.commit();
        res.status(200).json({message: "Success"})
    } catch (error) {
        // await trx.rollback();
        next(error);
    }
};

const updatePassword = async (req, res, next) => {
    try {
        const {email, password, newPassword, confirmPassword} = req.body;

        const resultValidation = await userValidator.changePassword({email, password, newPassword, confirmPassword});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)}

        const [findUser] = await sequelize.query('SELECT * FROM users WHERE email = (:email) and password = (:password)', {
            replacements: {email, password},
            type: QueryTypes.SELECT
        })
        if (!findUser) { return res.status(404).json({message: "User not found"})};
        
        if (newPassword != confirmPassword) {return res.status(403).json({message: "Confirm Password Wrong"})}

        await User.update({password: newPassword}, {where: {id: findUser.id}});
        res.status(200).json({message: "Success"})
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    findAll,
    findInfo,
    findOne,
    updateProfile,
    updateBalance,
    updatePassword,
    profile
}