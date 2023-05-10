const dotenv = require("dotenv");
dotenv.config();

const environmentVariables = process.env;

const secretKey = environmentVariables.secret_key

module.exports = secretKey