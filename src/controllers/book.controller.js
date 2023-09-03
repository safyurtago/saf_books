const path = require('path');
const {v4: uuid} = require('uuid');


const Book = require('../models/Book.model');
const sequelize = require('../database');
const bookValidator = require('../validations/book.validation');
const { CustomError } = require('../utils/custom-error');
const { QueryTypes, where } = require('sequelize');
const Category = require('../models/Category.model');
const Author = require('../models/Author.model');
const Quote = require('../models/Quote.model');
const Comment = require('../models/Comment.model');

const create = async (req, res, next) => {
    try {
        const {title, pages, year, price, country, description, author_id, category_id} = req.body;

        const {photo_url} = req.files
        

        const resultValidation = await bookValidator.create({title, pages, year, price, country, description, author_id,category_id, photo_url});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); };

        
        const findCategory = await sequelize.query('select * from categories where id = ?', {
            replacements: [category_id],
            type: QueryTypes.SELECT
        })
        if (!findCategory.length) { return res.status(404).json({message: "Category not found"}) };
        const findAuthor = await sequelize.query('select * from authors where id = ?', {
            replacements: [author_id],
            type: QueryTypes.SELECT
        })
        if (!findAuthor.length) { return res.status(404).json({message: "Athor not found"}) };

        const photoName = uuid() + path.extname(photo_url.name)
        photo_url.mv(process.cwd() + '/uploads/' + photoName)
        
        const newBook = await Book.create({title, pages, year, price, country, description, author_id, category_id, phot_url: photoName});
        res.status(201).json({message: "Book successfully created", newBook})

    } catch (error) {
        // console.log(error);
        next(error);
    }
}
const findAll = async (req, res, next) => {
    try {
        const books = await Book.findAll({include: [{model: Category}, {model: Author}, {model: Quote}, {model: Comment}]})
        res.status(200).json(books)
    } catch (error) {
        next(error);
    }
}

const findOne = async (req, res, next) => {
    try {
        const {id} = req.params
        const findBook = await Book.findOne({where: {id}, include: [{model: Author}, {model: Comment}, {model: Category}, {model: Quote}]});
        res.status(200).json({message: "Book successfully found", findBook});
    } catch (error) {
        next(error);
    }
}

const updateOne = async (req, res, next) => {
    try {
        const {id} = req.params

        const {title, pages, year, price, country, description, author_id, category_id} = req.body;

        const {photo_url} = req.files
        
        const resultValidation = await bookValidator.create({title, pages, year, price, country, description, author_id, category_id, photo_url});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); };

        const findBook = await sequelize.query('select * from books where id = ?', {
            replacements: [id],
            type: QueryTypes.SELECT
        })

        const photoName = uuid() + path.extname(photo_url.name)
        // await fs.unlinkSync(process.cwd() + '/uplaods/' + findBook.photo_url)
        photo_url.mv(process.cwd() + '/uplaods/' + photoName)

        const updateBook = await Book.update({title, pages, year, price, country, description, author_id, category_id, photo_url: photoName});
        res.status(200).json({message: "Book successfully updated", updateBook})

    } catch (error) {
        next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.delete({where: {id}});
        res.status(200).json({message: "Book successfully deleted", deletedBook});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    updateOne,
    findAll,
    findOne,
    deleteOne
}