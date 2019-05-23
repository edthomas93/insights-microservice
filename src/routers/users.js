const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

// POST SIGN UP / REGISTER
router.post('/signup', async (req, res, next) => {
  try {
    console.log('BODY', req.body);
    const user = await controllers.users.create(req.body);
    res.status(200).json(user);
    return next();
  } catch (err) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
    return next();
  }
});

// POST LOGIN / SIGN IN
router.post('/signin', async (req, res, next) => {
  try {
    const users = await controllers.users.list();
    res.status(200).json(users);
    return next();
  } catch (err) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ error: err.message });
    return next();
  }
});

// POST LOGOUT --> NOT URGENT

module.exports = router;
