require('dotenv/config');

const {env} = process;

const config = {
    port: env.PORT,
    db_port: env.DB_PORT,
    db_host: env.DB_HOST,
    db_user: env.DB_USER,
    db_name: env.DB_NAME,
    db_pass: env.DB_PASS,
    jwt_secret: env.JWT_SECRET
}

module.exports = config;