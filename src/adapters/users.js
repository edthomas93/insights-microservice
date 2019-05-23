const { ServiceError } = require('../errors');
const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const create = async (body) => {
  try {
    console.log({ message: 'Sending POST request to User Service' });
    const user = new User(body);
    await user.save();
    console.log({ message: 'Successfully created user' });
    // create sesssionkey;
    const payload = {
      id: user._id,
      username: user.username
    };
    const token = jwt.encode(payload, config.secret);
    console.log("decoded token>>>>>>>>>>>>>>>>>", jwt.decode(token, config.secret));
    // return user
    return {
      id: user._id,
      username: user.username,
      sessionkey: token
    };
  } catch (err) {
    console.log({ err: err.message, message: 'Error Creating User' });
    throw new ServiceError(err);
  }
};

module.exports = {
  create
};
