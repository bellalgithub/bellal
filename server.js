const {readdirSync} = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//routes middleware
readdirSync('./routes').map(r => app.use('/api/v1', require(`./routes/${r}`)));

//server
const port = process.env.PORT || 8085

//connect to DB and start server
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port : ${port}`)
        });
    })
    .catch((err) => console.log(err));
