const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const xss = require('xss-clean');
// const { AppError } = require('./utilities');
// const { globalErrorHandler } = require('./controllers');
const v1 = require('./routes/v1');

// create an express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(morgan('dev'));

// routes
app.use('/api/v1', v1);
// app.use('/api/v1/home', homeRouter);
// app.use('/', baseRouter);

// app.use(globalErrorHandler);
module.exports = app;
