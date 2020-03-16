const mysql = require('mysql2/promise');

const listTables = async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql', // <- input parameter
  });

  try {
    const [
      rows,
    ] = await connection.execute(
      'SELECT table_name AS name FROM information_schema.tables WHERE table_schema = ?',
      ['hr'],
    );
    res.json({ success: true, rows });
  } catch (error) {
    res.json({ success: false, message: 'See logfile' });
  }
};

module.exports = listTables;
