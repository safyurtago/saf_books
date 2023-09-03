const {Model, Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../database');

class Book extends Model {};

Book.init({
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    phot_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0
    }
},
{   
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "books",
    tableName: "books",
    freezeTableName: true, 
    sequelize,
}
);

module.exports = Book;