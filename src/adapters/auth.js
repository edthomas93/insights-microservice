const jwt = require('jwt-simple');
const config = require('../config');

const createToken = (user) => {
  const payload = {
    username: user.username,
    expiryDate: Date.now() + 86400000
  };
  const newToken = jwt.encode(payload, config.secret);
  console.log('decoded token>>>>>>>>>>>>>>>>>', jwt.decode(newToken, config.secret));
  return {
    username: user.username,
    token: newToken
  };
};

module.exports = {
  createToken
};
