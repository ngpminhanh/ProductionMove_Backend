'use strict';

module.exports = {
  // email: DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // roleid: DataTypes.STRING,
  // role:DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Admins', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
    address:'ha noi',
    role: 'bigcorp',
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  },
   
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
