const app = require('./app');
const pool = require('./pool');

require('dotenv').config();

pool
  .connect({
    host: '127.0.0.1',
    port: process.env.PG_PORT,
    database: 'store',
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
  })
  .then(() => {
    app().listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
