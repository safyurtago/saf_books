const userReadBooksValidator = require('../validations/userReadBooks.validation');
const { CustomError } = require('../utils/custom-error');
const Book = require('../models/Book.model');
const User = require('../models/User.model');

const Joi = require('joi');
const userReadBooks = require('../models/UserReadBooks.model');

const create = async (req, res, next) => {
    try {
        const {book_id, rating, whichPage} = req.body;
        const user_id = req.user.id;
        const user = req.user;

        const resultValidation = await userReadBooksValidator.create({book_id, rating, whichPage});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }

        const findBook = await Book.findOne({where: {id: book_id}});
        if (!findBook) { return res.status(404).json({error: 'Book not found'}); };
        
        await User.update({balance: +user.balance - +findBook.price}, {where: {id: user.id}});

        const data = await userReadBooks.create({user_id, book_id, whichPage, rating})
        res.status(201).json({message: "Created", data})

    } catch (error) {
        next(error);
    }
};
    
const findAll = async (req, res, next) => {   // admin can access to find all users user read books infos
    try {
        const datas = await userReadBooks.findAll({include: [{model: Book}, {model: User}]})
        res.status(200).json(datas)
    } catch (error) {
        next(error);
    }
};
const findOne = async (req, res, next) => {   // admin can access to find all users user read books infos
    try {
        const {id} = req.params;
        const data = await userReadBooks.findOne({include: [{model: Book}, {model: User}], where: {id}})
        res.status(200).json(data)
    } catch (error) {
        next(error);
    }
};
const findAllForUser = async (req, res, next) => {
    try {
        const user_id = req.user.id;
        const datas = await userReadBooks.findAll({where: {user_id}, include: [{model: Book}, {model: User}]})
        res.status(200).json(datas)
    } catch (error) {
        next(error);
    }
};
const findOneForUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        // const user_id = req.user.id;
        const data = await userReadBooks.findOne({include: [{model: Book}, {model: User}], where: {id}})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    create, 
    findAll,
    findOne,
    findAllForUser,
    findOneForUser,
}


