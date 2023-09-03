const quoteValidator = require('../validations/quote.validation')
const { CustomError } = require('../utils/custom-error');

const Book = require('../models/Book.model');
const Quote = require('../models/Quote.model');

const create = async (req, res, next) => {
    try {
        const {book_id, title, description} = req.body;
        
        const resultValidation = await quoteValidator.create({book_id, title, description});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }

        const findBook = await Book.findOne({where: {id: book_id}})
        if  (!findBook) { return res.status(404).json({error: 'Book not found'}); }

        const newQuote = await Quote.create({book_id, title, description, bookId: book_id});
        res.status(201).json({message: 'Quote created successfully', data: newQuote});
    } catch (error) {
        console.log(error);
        next(error);
    }
};
const findAll = async (req, res, next) => {
    try {
        const quotes = await Quote.findAll({include: Book})
        res.status(200).json({message: 'Quotes found successfully', data: quotes});
    } catch (error) {
        next(error);
    }
};
const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const quote = await Quote.findOne({include: Book}, {where: {id}});
        res.status(200).json({message: 'Quote found successfully', data: quote}); 
    } catch (error) {
        next(error);
    }
};
const updateOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {book_id, title, description} = req.body;
        
        const resultValidation = await quoteValidator.create({book_id, title, description});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }

        const findBook = await Book.findOne({where: {id}})
        if  (!findBook) { return res.status(404).json({error: 'Book not found'}); }

        const newQuote = await Quote.update({book_id, title, description, bookId: book_id});
        res.status(200).json({message: 'Quote updated successfully', data: newQuote});
    } catch (error) {
        next(error);
    }
};
const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deletedQuote = await Quote.destroy({where:{id}})
        res.status(200).json({message: 'Quote deleted successfully', data: deletedQuote});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    updateOne,
    deleteOne,
    findAll,
    findOne
}
