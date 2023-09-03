const {v4: uuid} = require('uuid');
const path = require('path');

const { CustomError } = require('../utils/custom-error');
const authorValidator = require('../validations/author.validation')
const Author = require('../models/Author.model');
const Book = require('../models/Book.model');


const create = async (req, res, next) => {
    try {
        const {first_name, last_name, birth_date, death_date, country, bio} = req.body;
        const {photo_url} = req.files

        const resultValidation = await authorValidator.create({first_name, last_name, birth_date, death_date, country, bio, photo_url});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }

        const findAuthor = await Author.findOne({where: {first_name, last_name, birth_date, death_date}});
        if (findAuthor) { return res.status(409).json({message: "Author already exists", findAuthor}); }

        const photoName = uuid() + path.extname(photo_url.name)
        photo_url.mv(process.cwd() + '/uploads/' + photoName)
        const newAuthor = await Author.create({first_name, last_name, birth_date, death_date, country, bio, photo_url: photoName});

        res.status(201).json({message: "Author succesfully created", newAuthor})

    } catch (error) {
        console.log(error);
        next(error);
    }
};
const findAll = async (req, res, next) => {
    try {
        const authors = await Author.findAll({include: Book})
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};
const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const findAuthor = await Author.findOne({where: {id}})
        res.status(200).json(findAuthor)
    } catch (error) {
        next(error);
    }
};
const updateOne = async (req, res, next) => {
    try {
        const {first_name, last_name, birth_date, death_date, country, bio} = req.body;
        const {photo_url} = req.files

        const resultValidation = await authorValidator.create({first_name, last_name, birth_date, death_date, country, bio, photo_url});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400); }

        const findAuthor = await Author.findOne({where: {first_name, last_name, birth_date, death_date}});
        if (findAuthor) { return res.status(409).json({message: "Author already exists", findAuthor}); }

        const photoName = uuid() + path.extname(photo_url.name)
        photo_url.mv(process.cwd() + '/uploads/' + photoName)
        const newAuthor = await Author.update({first_name, last_name, birth_date, death_date, country, bio, photo_url: photoName});

        res.status(200).json({message: "Author succesfully updated", newAuthor})
    } catch (error) {
        next(error);
    }
};
const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params
        const deletedAuthor = await Author.destroy({where: {id}});
        res.status(200).json({message: "Author deleted", deletedAuthor});
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