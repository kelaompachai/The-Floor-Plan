// this is where the database and the server should connect

// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');

const PG_URI = 'postgres://ngtccljg:R3F77FgCxdGdMzkmnpWyiwXNUNjgK7v6@stampy.db.elephantsql.com/ngtccljg';

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
