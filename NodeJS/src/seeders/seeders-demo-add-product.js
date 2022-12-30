'use strict';

module.exports = {
    // productline_id: DataTypes.STRING,
    // name: DataTypes.STRING,
    // image: DataTypes.STRING,
    // description: DataTypes.STRING,
    // status: DataTypes.STRING
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Product', [{
    productline_id: 1,
    name: 'Ô tô Honda A',
    image: null,
    description: 'Ô tô 4 chỗ',
    status: 'Mới sản xuất'
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
