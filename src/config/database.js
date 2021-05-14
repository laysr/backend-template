require('dotenv').config();

const DATABASE = process.env.DB_DATABASE;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

module.exports = {
  development: {
    dialect: 'postgres',
    username: USER,
    password: PASS,
    database: DATABASE,
    host: HOST,
    port: PORT,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }
};