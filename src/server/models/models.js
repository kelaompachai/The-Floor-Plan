// this is where the database and the server should connect

const { Pool } = require('pg');
require('dotenv').config();


const PG_URI = process.env.DATABASE_URI;

const pool = new Pool({
  connectionString: PG_URI,
});


// export a function that allows us to query the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
