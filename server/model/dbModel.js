const { Pool } = require('pg');

require('dotenv').config();

const databaseParams = {
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DBNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
};
// const databaseParams = {
//   user: 'jamesk',
//   host: 'localhost',
//   database: 'postgres',
//   port: 5432,
// };

const pool = new Pool(databaseParams);

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
