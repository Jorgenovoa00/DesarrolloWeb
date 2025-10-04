const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:FennXEVULFWkoMGhquwThuxZlpRAXKlT@maglev.proxy.rlwy.net:18744/railway',
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
