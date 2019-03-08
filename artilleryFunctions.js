// Make sure to "npm install faker" first.
const faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const street = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zip = faker.address.zipCode('#####');
  const listing_agent = Math.ceil(Math.pow(Math.random(), 2) * 1000000);
  // add variables to virtual user's context:
  userContext.vars.street = street;
  userContext.vars.city = city;
  userContext.vars.state = state;
  userContect.vars.zip = zip;
  userContext.vars.listing_agent = listing_agent;
  // continue with executing the scenario:
  return done();
}

module.exports = {
  generateRandomData
};
