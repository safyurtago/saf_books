const { Model, Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database');

class Comment extends Model {};

Comment.init({
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "comments",
    tableName: "comments",
    freezeTableName: true,
    sequelize
});

module.exports = Comment;