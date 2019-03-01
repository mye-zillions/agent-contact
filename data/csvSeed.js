const fs = require('fs');
const faker = require('faker');

generateAgents(1000000);
generateListings(10000000);


function generateAgents(number) {
  let writableAgents = fs.createWriteStream('./data/agents1mill.csv', { 'flags': 'a' });

  var string = '';
  writableAgents.write('id,name,company,reviews,recentSales,phone,premier,zip,photo\n');
  for (let i = 1; i <= number; i++) {
    string += `${i},${faker.name.findName()},'${faker.company.companyName()}',${faker.random.number(100)},${faker.random.number(80)},${faker.phone.phoneNumberFormat(1)},${faker.random.arrayElement([true, false])},${faker.address.zipCode('#####')},${faker.image.avatar()}\n`;
    if (i % 100000 === 0) {
      writableAgents.write(string);
      string = '';
    }
    if (i % 100000 === 0) {
      console.log(`${i} agents created`);
    }
  }
}


function generateListings(number) {
  let writeableListings = fs.createWriteStream('./data/listings10mill.csv', { 'flags': 'a' });

  var string = '';
  writeableListings.write('id,street,city,state,zip,listing_agent\n');
  for (let i = 1; i <= number; i++) {
    let randomAgent = Math.floor(Math.pow(Math.random(), 2) * 1000000);
    string += `${i},${faker.address.streetAddress()},${faker.address.city()},${faker.address.stateAbbr()},${faker.address.zipCode('#####')},${randomAgent}\n`;
    if (i % 100000 === 0) {
      writeableListings.write(string);
      string = '';
    }
    if (i % 1000000 === 0) {
      console.log(`${i} listings created`);
    }
  }
}
