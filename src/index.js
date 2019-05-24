const express = require('express');
const mongoose = require('mongoose');
const middlewares = require('../middlewares');
const filmsRouter = require('./routers/films');
const usersRouter = require('./routers/users');

const app = express();

// DB Config
const { db } = require('./config');

console.log('===== URL ====', db);

// connect to mongoDB
mongoose
  .connect(db.url, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
    console.log('MongoDB Not Connected');
  });

app.use(middlewares.parseRequest());

app.use('/films', filmsRouter);
app.use('/users', usersRouter);

module.exports = app;
