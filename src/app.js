const express = require('express');

const { swaggerUI, swaggerSpec } = require('./swagger/config');
const config = require('../config')
const sequelize = require('./database');
const {errorHandler} = require('./middlewares/error-handler');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes');
require('./models/association')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(process.cwd() + '/uplaods'));
app.use(fileUpload());
app.use(cors());

app.use('/api', routes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(errorHandler)

const sfr = async () => {
    await sequelize.authenticate({
        logging: false,
    })
    
    await sequelize.sync({
        alter: true,
        logging: false,
    })
    
    app.listen(config.port, () => {
        console.log("listening on port " + config.port);
    });
};

sfr()