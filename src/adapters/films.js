const rp = require('request-promise');
const config = require('../config');
const { ServiceError } = require('../errors');

const list = async () => {
  try {
    console.log({ message: 'Sending GET request to Film Service' });
    const response = await rp({
      url: config.films.url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      json: true,
      resolveWithFullResponse: true
    });
    console.log({ message: 'Successfully retrieved Films' });
    return response.body;
  } catch (err) {
    // log error as close to occurance as possible
    console.log({ err: err.message, message: 'Error Obtaining Films' });
    throw new ServiceError(err);
  }
};

module.exports = {
  list
};
