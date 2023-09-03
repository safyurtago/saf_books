const {Model, DataTypes, Sequelize} = require('sequelize')

const sequelize = require('../database');

class Author extends Model {};

Author.init({
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    death_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "authors",
    tableName: "authors",
    freezeTableName: true,
    sequelize,
}
);

module.exports = Author;