const { users } = require('../adapters');
const { BaseError, InternalServerError } = require('../errors');

const create = async (body) => {
  console.log('CONTROLLER');
  try {
    const newUser = await users.create(body);
    console.log('NEW USER', newUser);
    return newUser;
  } catch (err) {
    let error = err;
    if (!(err instanceof InternalServerError)) {
      console.log({ err: err.message, message: 'Internal Server Error' });
      error = new InternalServerError(err);
    }
    throw error;
  }
};

const signin = async (body) => {
  try {
    const signinResponse = await users.getDetails(body);
    return signinResponse;
  } catch (err) {
    let error = err;
    if (!(err instanceof BaseError)) {
      console.log({ err: err.message, message: 'Internal Server Error' });
      error = new InternalServerError(err);
    }
    throw error;
  }
};

module.exports = {
  create,
  signin
};
