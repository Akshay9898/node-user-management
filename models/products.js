const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./User')

const Product = db.define('product',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    product_price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_description:{
        type: Sequelize.STRING,
        allowNull: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
    }
})

Product.belongsTo(User);

module.exports = Product;