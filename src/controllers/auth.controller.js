const authValidator = require('../validations/auth.validation')
const { CustomError } = require('../utils/custom-error');
const User = require('../models/User.model');
const jwt = require('../utils/jwt');
const sequelize = require('../database');
const { QueryTypes } = require('sequelize');

const register = async (req, res, next) => {
    try {
        const {first_name, last_name, phone_number, email, password} = req.body;
        
        const resultValidation = await authValidator.register({first_name, last_name, phone_number, email, password});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); };

        const [user] = await sequelize.query('SELECT * FROM users WHERE email = (:email)', {
            replacements: {email},
            type: QueryTypes.SELECT
        })
        if (user) { return res.status(409).json({message: "Email already registered"}) }

        const newUser = await User.create({first_name, last_name, phone_number, email, password});
        res.status(201).json({message: "New user created successfully", newUser});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const resultValidation = await authValidator.login({email, password});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }


        const [user] = await sequelize.query('SELECT * FROM users WHERE email = (:email) and password = (:password)', {
            replacements: {email, password},
            type: QueryTypes.SELECT
        })

        if (!user) { return res.status(404).json({message: "User not found"}); }

        const token = jwt.generateToken({id: user.id})
        res.status(200).json({message: "User Logged in successfully", token})
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = {
    register,
    login,
}