const { BaseError, InternalServerError, NotFoundError } = require('../errors');
const User = require('../models/user');
const auth = require('./auth');

const create = async (body) => {
  try {
    console.log({ message: 'Sending POST request to user/signup service' });
    const user = new User(body);
    await user.save();
    return await auth.createToken(user);
  } catch (err) {
    console.log({ err: err.message, message: 'Error Creating User' });
    throw new InternalServerError(err);
  }
};

const getDetails = async (body) => {
  try {
    console.log({ message: 'Sending POST request to user/signin service' });
    const query = User.findOne({ username: body.username });
    const promise = query.exec();
    const user = await promise;
    console.log("USER >>>>>>>>>>>>>>>>>>>>", user);
    if (user === null) {
      throw new UnauthorizedError('User and password do not match');
    }
    const response = await auth.createToken(user);
    console.log("RESPONSE>>>>>>>>>>>>>>>>>", response);
    return response;
  } catch (error) {
    console.log(error);
    // if NOT hanlded error, throw service error
    if (!(error instanceof BaseError)) throw new InternalServerError(error);
    throw error;
  }
};

module.exports = {
  create,
  getDetails
};
