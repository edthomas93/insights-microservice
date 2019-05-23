const { ServiceError } = require('../errors');
const rp = require('request-promise');
const User = require('../models/user');

const create = async (body) => {
  try {
    console.log({ message: 'Sending POST request to User Service' });
    console.log('BODY ==>>', body);
    const user = new User(body);
    await user.save();
    console.log('USER', user);
    console.log({ message: 'Successfully created user' });
    // return user;

    return {
      id: user._id,
      username: user.username,
      password: user.password,
      favourites: user.favourites
    };
  } catch (err) {
    console.log({ err: err.message, message: 'Error Creating User' });
    throw new ServiceError(err);
  }
};

const list = async () => {
  try {
    console.log({ message: 'Sending GET request to User Service' });
    const response = await rp({
      url: config.users.url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      json: true,
      resolveWithFullResponse: true
    });
    console.log({ message: 'Successfully retrieved Users' });
    return response.body;
  } catch (err) {
    // log error as close to occurance as possible
    console.log({ err: err.message, message: 'Error Obtaining Users' });
    throw new ServiceError(err);
  };
};

module.exports = {
  create,
  list
};
