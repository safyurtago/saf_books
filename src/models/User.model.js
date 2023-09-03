const {Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
},
{
    createdAt: "created_at",
    updatedAt: "updated_at",
    modelName: "users",
    tableName: "users",
    freezeTableName: true, 
    sequelize,
}
);

module.exports = User;