const { users } = require('../adapters');
const { ServiceError } = require('../errors');

const create = async (request) => {
  console.log('CONTROLLER')
  try {
    const newUser = await users.create(request);
    console.log('NEW USER', newUser);
    return newUser;
  } catch (err) {
    // only log the error if it hasn't already been caught and logged
    let error = err;
    if (!(err instanceof ServiceError)) {
      console.log({ err: err.message, message: 'Internal Server Error' });
      error = new ServiceError(err);
    }
    throw error;
  }
};

const list = async () => {
  try {
    const userList = await users.list();
    return userList;
  } catch (err) {
    let error = err;
    if (!(err instanceof ServiceError)) {
      console.log({ err: err.message, message: 'Internal Server Error' });
      error = new ServiceError(err);
    }
    throw error;
  };
};

module.exports = {
  create,
  list
};