const pg = require('../../data/index.js');
const url = require('url');

const getAllHouseInfo = (req, res) => {
  let houseId = req.params.houseId;
  console.log('get req for house: ', houseId);
  pg.getHouseInfo(houseId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getPremierAgentsForHouse = (req, res) => {
  let houseId = req.params.houseId;
  console.log('get premierAgents');
  pg.getPremierAgentsForHouse(houseId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getPremierAgentsByZip = (req, res) => {
  let urlParts = url.parse(req.url);
  let queryString = urlParts.query;
  console.log('get premierAgents');
  console.log('query string:', queryString);
  pg.getPremierAgentsByZip(queryString, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getAllHouseInfo,
  getPremierAgentsForHouse,
  getPremierAgentsByZip,
  // getAgentInfo,
};
