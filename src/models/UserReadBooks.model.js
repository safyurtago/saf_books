const { Model, Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');


class userReadBooks extends Model {};

userReadBooks.init({
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    whichPage: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    rating: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: null,
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "userreadbooks",
    tableName: "userreadbooks",
    freezeTableName: true, 
    sequelize
});

module.exports = userReadBooks;