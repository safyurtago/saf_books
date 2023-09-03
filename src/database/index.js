const {Sequelize} = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize({
    dialect: "postgres",
    port: config.db_port || 5432,
    host: config.db_host || "localhost",
    username: config.db_user || "postgres",
    password: config.db_pass || "admin",
    database: config.db_name || "saf_books"
});

module.exports = sequelize;