const pg = require('../../data/index.js');
const url = require('url');

const getPremierAgentsByZip = (req, res) => {
  let urlParts = url.parse(req.url);
  let queryString = urlParts.query;
  pg.getPremierAgentsByZip(queryString, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getPremierAgentsByZip
};
