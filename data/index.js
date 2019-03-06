const { Client } = require('pg');

const client = new Client({
  // user: '',
  host: 'localhost',
  database: 'agent_contact',
  // password: '',
  // port: 3211,
});

client.connect();

const getHouseInfo = (listingId, callback) => {
  client.query(`SELECT listings.street, listings.city, listings.state, listings.zip, agents.name, agents.reviews, agents.recentSales, agents.phone, agents.premier, agents.photo FROM listings INNER JOIN agents on listings.listing_agent = agents.id WHERE listings.id = ${listingId}`, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(null, data.rows);
    }
  });
};

const getPremierAgents = (callback) => {
  client.query(`SELECT * from agents WHERE agents.premier = true and agents.zip = 98657`, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(null, data.rows);
    }
  });
};

const getPremierAgentsForHouse = (listingId, callback) => {
  client.query(`SELECT * from agents INNER JOIN listings on agents.zip = listings.zip WHERE listings.id = ${listingId}`, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(null, data.rows);
    }
  });
};

module.exports = {
  getHouseInfo,
  getPremierAgents,
  getPremierAgentsForHouse,
};
