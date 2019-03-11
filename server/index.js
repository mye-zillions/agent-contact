require('newrelic');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const houses = require('./controllers/houses');
const agents = require('./controllers/agents');

const app = express();
const PORT = process.env.PORT || 8082;

app.use('/:houseId', express.static(path.resolve(__dirname, '../client/dist')));
app.use(compression());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/houses', houses.createNewHouse);

app.get('/api/houses/:houseId', houses.getAllHouseInfo);

// update
app.patch('/houses/:houseId', (req, res) => {
  // pass in house id and address and/or agent id
});

// delete
app.delete('/houses/:houseId', (req, res) => {
  // pass in house id
});

app.get('/api/agents', agents.getPremierAgentsByZip);

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});
