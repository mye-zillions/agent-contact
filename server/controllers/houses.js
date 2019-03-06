const pg = require('../../data/index.js');

const getAllHouseInfo = (req, res) => {
  let houseId = req.params.houseId;
  console.log('get req for house: ', houseId);
  pg.getHouseInfo(houseId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
};

const getPremierAgents = (req, res) => {
  let houseId = req.params.houseId;
  console.log('get premierAgents');
  pg.getPremierAgentsForHouse(houseId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = {
  getAllHouseInfo,
  getPremierAgents,
};
