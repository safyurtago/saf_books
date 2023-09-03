const Joi = require('joi');
const Category = require('../models/Category.model')
const sequelize = require('../database');
const { CustomError } = require('../utils/custom-error'); 
const { QueryTypes } = require('sequelize');


const create = async (req, res, next) => {
    try {
        const {name} = req.body;
        const {error} = Joi.object({
            name: Joi.string().required(),
        }).validate({name});
        if (error) throw new CustomError(error.message, 400)

        const findCategory = await sequelize.query('select * from categories where name = ?', {
            replacements: [name],
            type: QueryTypes.SELECT
        })
        if (findCategory.length) return res.status(409).json({message: 'Category already exists'})
        const newCategory = await Category.create({name});
        res.status(201).json({message: "Succesfully created", newCategory})
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const findCategory = await sequelize.query('select * from categories where id = ?', {
            replacements: [id],
            type: QueryTypes.SELECT
        })
        if (!findCategory) {return res.status(404).json({message: "Category not found"})};

        res.status(200).json({findCategory})

    } catch (error) {
        next(error);
    }
};

const findAll = async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories)
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    findOne,
    findAll,
}