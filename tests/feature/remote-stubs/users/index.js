const { heads: { RoboHydraHead } } = require('robohydra');
const users = require('../../../responses/users');

exports.getBodyParts = () => ({
  heads: [
    new RoboHydraHead({
      path: '/users',
      method: 'GET',
      handler(req, res) {
        const response = JSON.stringify(users);
        res.send(response);
      }
    })
  ]
});
