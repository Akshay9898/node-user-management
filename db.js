const Sequelize = require('sequelize')
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'ums'
}
)

module.exports = db; 