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

module.exports = {
  getAllHouseInfo
};
