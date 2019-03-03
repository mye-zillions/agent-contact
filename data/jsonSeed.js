const fs = require('fs');
const faker = require('faker');
const agents = require('./agents.json')

// generateAgents(1000000);
generateListings(10000000);

function generateAgents(number) {
  let writableAgents = fs.createWriteStream('./data/agents.json', { 'flags': 'a' });

  let data = '';
  for (let i = 1; i <= number; i++) {
    let obj = {
      id: i,
      name: faker.name.findName(),
      company: faker.company.companyName(),
      reviews: faker.random.number(100),
      recentSales: faker.random.number(80),
      phone: faker.phone.phoneNumberFormat(1),
      premier: faker.random.arrayElement([true, false]),
      zip: faker.address.zipCode('#####'),
      photo: faker.image.avatar(),
    };
    if (i === 1) {
      data += '[';
    }
    data += JSON.stringify(obj);
    if (i === number) {
      data += ']';
    } else {
      data += ',';
    }
    writableAgents.write(data);
    data = '';
    if (i % 100000 === 0) {
      console.log(`${i} agents created`);
    }
  }
}

function generateListings(number) {
  let writableListings = fs.createWriteStream('./data/listings.json', { 'flags': 'a' });

  let data = '';
  for (let i = 1; i <= number; i++) {
    let randomAgent = Math.ceil(Math.pow(Math.random(), 2) * 1000000);
    let obj = {
      id: i,
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode('#####'),
      agent: agents[randomAgent],
    };
    if (i === 1) {
      data += '[';
    }
    data += JSON.stringify(obj);
    if (i === number) {
      data += ']';
    } else {
      data += ',';
    }
    if (i % 100000 === 0) {
      writableListings.write(data);
      data = '';
    }
    if (i % 1000000 === 0) {
      console.log(`${i} listings created`);
    }
  }
}
