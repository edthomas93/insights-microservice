const { films } = require('../adapters');
const { InternalServerError } = require('../errors');
const filmlistHandler = require('../handlers/filmsHandler');

const list = async () => {
  console.log('CONTROLLER');
  try {
    const filmList = await films.list();
    return filmlistHandler.format(filmList);
  } catch (err) {
    // only log the error if it hasn't already been caught and logged
    let error = err;
    if (!(err instanceof InternalServerError)) {
      console.log({ err: err.message, message: 'Internal Server Error' });
      error = new InternalServerError(err);
    }
    throw error;
  }
};

module.exports = {
  list
};
