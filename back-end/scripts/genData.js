const { faker } = require('@faker-js/faker');
const fs = require('fs');
const developers = [
  'John Doe',
  'Jane Doe',
  'Jim Smith',
  'Jill Smith', 
  'Jack Black',
  'Jane Black',
  'Jill Black',
];

const methodologies = ['Agile', 'Waterfall', 'Spiral'];


const numProducts = 40;

const products = [];
for (let i = 0; i < numProducts; i++) {

  const productId = i + 1;
  
  const productName = faker.commerce.productName();
  
  const productOwnerName = faker.person.fullName();
  
  const scrumMasterName = faker.person.fullName();

  const randomDate = faker.date.past();
  const startDate = `${randomDate.getFullYear()}/${randomDate.getMonth() + 1}/${randomDate.getDate()}`;

  const randomDevelopers = [];


  // pick 3 random developers
  for (let j = 0; j < 3; j++) {
    const randomDev = developers[Math.floor(Math.random() * developers.length)];
    randomDevelopers.push(randomDev);
  }
  const randomMethodology = methodologies[Math.floor(Math.random() * methodologies.length)];

  const location = "https://github.com/bcgov/product" + faker.internet.userName();

  const product = {
    productId,
    productName, 
    productOwnerName,
    Developers: randomDevelopers,
    scrumMasterName,
    startDate,
    methodology: randomMethodology,
    location
  };
  products.push(product); 
}

// save products to a JSON file
const data = JSON.stringify(products, null, 2);

// write the data to a file named products.json
fs.writeFileSync('products.json', data);