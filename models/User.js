const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('User',{
    id:{
        type: Sequelize.INTEGER,
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
    }

}) // password not to send in the response and add the product model, give foreign key to it and check if the user is authenticated to particular creds