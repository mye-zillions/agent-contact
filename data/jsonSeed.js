const fs = require('fs');
const faker = require('faker');

generateAgents(10);
// generateListings(10);

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
      photo: faker.image.avatar()
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
    if (i % 100 === 0) {
      console.log(`${i} agents created`);
    }
  }
}

function generateListings(number) {
  let writeableListings = fs.createWriteStream('./data/listings.json', { 'flags': 'a' });

  let data = '';
  for (let i = 1; i <= number; i++) {
    let obj = {
      id: i,
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode('#####'),
    };
    data += JSON.stringify(obj);
  }
  writeableListings.write(data);
};
