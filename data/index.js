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
      callback(null, data.rows);
    }
  });
};

const getPremierAgentsByZip = (queryParams, callback) => {
  let params = queryParams.split('&');
  let query = 'SELECT * from agents WHERE ';
  for (let i = 0; i < params.length; i++) {
    if (i === params.length - 1) {
      query += `${params[i]}`;
    } else {
      query += `${params[i]} and `;
    }
  }
  client.query(query, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data.rows);
    }
  });
};

module.exports = {
  getHouseInfo,
  getPremierAgentsByZip,
};
