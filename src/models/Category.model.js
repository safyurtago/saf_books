const {Model, DataTypes, Sequelize} = require('sequelize')

const sequelize = require('../database');

class Category extends Model {};

Category.init({
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "categories",
    tableName: "categories",
    freezeTableName: true,
    sequelize,
}
);

module.exports = Category;