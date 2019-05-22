const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    console.log('ROUTER');
    const films = await controllers.films.list();
    res.status(200).json(films);
    return next();
  } catch (err) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
    return next();
  }
});

module.exports = router;
