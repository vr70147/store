const pool = require('../pool');

const isAdmin = async (req, res, next) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE id = $1 AND role = $2',
    [req.user.id, 'admin']
  );
  if (!rows.length) {
    return res.status(403).send('Not admin');
  }
  next();
};

module.exports = { isAdmin };