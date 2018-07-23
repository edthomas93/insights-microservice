const express = require('express');
const { logger, errors } = require('@spokedev/fab_utils');
const clientsController = require('../controllers/clients');

const { BaseError, ServerError } = errors;

const router = express.Router();

router.post('/',
  async (req, res, next) => {
    try {
      const client = await clientsController.create(req.body);
      res.status(201).location(`/clients/${client.id}`).json(client);
      return next();
    } catch (err) {
      if (err instanceof BaseError) {
        logger.debug({ message: 'Error From Clients Controller' });
        next(err);
      }
      logger.error({ err, message: 'Unhandled Error From Clients Controller' });
      return next(new ServerError());
    }
  });

module.exports = router;
