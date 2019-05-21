const { heads: { RoboHydraHead } } = require('robohydra');
const films = require('../../../responses/films');

exports.getBodyParts = () => ({
  heads: [
    new RoboHydraHead({
      path: '/films',
      method: 'GET',
      handler(req, res) {
        const response = JSON.stringify(films);
        res.send(response);
      }
    })
  ]
});
