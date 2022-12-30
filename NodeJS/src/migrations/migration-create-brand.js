'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // productline_id: DataTypes.STRING,
    // name: DataTypes.STRING,
    // product_id: DataTypes.STRING
    await queryInterface.createTable('Brand', {
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
    await queryInterface.dropTable('Brand');
  }
};