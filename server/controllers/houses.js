const pg = require('../../data/index.js');

const getAllHouseInfo = (req, res) => {
  let houseId = req.params.houseId;
  pg.getHouseInfo(houseId, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const createNewHouse = (req, res) => {
  let house = req.body;
  pg.createNewHouse(house, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).end();
    }
  });
};


module.exports = {
  getAllHouseInfo,
  createNewHouse,
};
