const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
  // host: 'agents3.csast8i0snkv.us-east-2.rds.amazonaws.com',
  user: keys.user,
  password: keys.password,
  database: 'agents3',
});

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

connection.connect();

const getListedAgent = (houseId, callback) => {
  connection.query(`SELECT * FROM listedAgent WHERE houseId = ${houseId}`, (err, data) => {
    if (err) {
      console.log('RECEIVING LIST AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const createListedAgent = (houseId, options, callback) => {
  let query = 'INSERT INTO listedAgent (houseId, name, company, reviews, recentSales, phone, url) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [houseId, options.name, options.company, options.reviews, options.recentSales, options.phone, options.url], (err, data) => {
    if (err) {
      console.log('Creating AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const updateListedAgent = (houseId, options, callback) => {
  let query = 'UPDATE listedAgent SET name = ?, company = ?, reviews = ?, recentSales = ?, phone = ?, url = ? WHERE houseId = ?';
  connection.query(query, [options.name, options.company, options.reviews, options.recentSales, options.phone, options.url, houseId], (err, data) => {
    if (err) {
      console.log('Creating AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const deleteListedAgent = (houseId, callback) => {
  let query = 'DELETE from listedAgent WHERE houseId = ?';
  connection.query(query, [houseId], (err, data) => {
    if (err) {
      console.log('Creating AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const getPremierAgents = (callback) => {
  connection.query('SELECT * FROM premierAgents', (err, data) => {
    if (err) {
      console.log('RETREVING PREMIER AGENTS FAILED', err);
    } else {
      //selects 3 random premier agents from the list of 100
      const selected = [data[random(0, 33)], data[random(34, 66)], data[random(67, 100)]];
      callback(err, selected);
    }
  });
};

module.exports = { getListedAgent, createListedAgent, updateListedAgent, deleteListedAgent, getPremierAgents };
