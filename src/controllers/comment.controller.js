const commentValidator = require('../validations/comment.validation');
const { CustomError } = require('../utils/custom-error');
const Book = require('../models/Book.model');
const Comment = require('../models/Comment.model');
const User = require('../models/User.model');

const create = async (req, res, next) => {
    try {
        const {book_id, title, description} = req.body;
        const user_id = req.user.id;

        const resultValidation = await commentValidator.create({book_id, title, description});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)}

        const findBook = await Book.findOne({where: {id: book_id}})
        if (!findBook) { return res.status(404).json({message: 'Book not found'}) }

        const newComment = await Comment.create({user_id, book_id, title, description});
        res.status(201).json({message: 'Comment created successfully', data: newComment});

    } catch (error) {
        // console.log(error);
        next(error);
    }
};
const findAll = async (req, res, next) => {
    try {
        const comments = await Comment.findAll({include: [{model: Book}, {model: User}]})
        res.status(200).json({message: 'Comments found successfully', data: comments});
    } catch (error) {
        next(error);
    }
};
const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const comment = await Comment.findOne({where: {id}, include: [{model: Book}, {model: User}]});
        res.status(200).json(comment)
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        await Comment.destroy({where: {id}});
        res.status(200).json({message: "Deleted"})
    } catch (error) {
        // console.log(error);
        next(error);
    }
};

module.exports = {
    create,
    findAll,
    findOne,
    deleteOne,
}