'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // product_id: DataTypes.STRING,
    // name: DataTypes.STRING,
    // address: DataTypes.STRING,
    // contact: DataTypes.INTEGER,
    await queryInterface.createTable('Distribution', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Distribution');
  }
};