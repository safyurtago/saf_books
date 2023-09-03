const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = require('../database');

class Quote extends Model {};

Quote.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "quotes",
    tableName: "quotes",
    freezeTableName: true,
    sequelize,
}
);

module.exports = Quote;