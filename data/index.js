const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '13.57.51.215',
  // host: 'localhost',
  database: 'agent_contact',
  port: 5432,
  max: 40,
});

pool.connect();

const getHouseInfo = (listingId, callback) => {
  pool.query(`SELECT listings.street, listings.city, listings.state, listings.zip, agents.name, agents.reviews, agents.recentSales, agents.phone, agents.premier, agents.photo FROM listings INNER JOIN agents on listings.listing_agent = agents.id WHERE listings.id = ${listingId}`, (err, data) => {
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
  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data.rows);
    }
  });
};

const createNewHouse = (object, callback) => {
  let query = `INSERT INTO listings (street, city, state, zip, listing_agent) VALUES ('${object.street}', '${object.city}', '${object.state}', ${object.zip}, ${object.listing_agent})`;
  pool.query(query, (err) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null);
    }
  });
};


module.exports = {
  getHouseInfo,
  getPremierAgentsByZip,
  createNewHouse,
};
