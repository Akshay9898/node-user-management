'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { 
      id:{
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
      name:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true   
      },
      password:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE 
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};
