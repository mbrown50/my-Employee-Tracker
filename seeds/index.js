const seedDepartments = require('./department-seeds');
const seedEmployees = require('./employee-seeds');
const seedRoles = require('./role-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDepartments();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedRoles();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
