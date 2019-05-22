const express = require('express');
const middlewares = require('../middlewares');
const filmsRouter = require('./routers/films');

const app = express();

app.use(middlewares.parseRequest());

app.use('/films', filmsRouter);

module.exports = app;
