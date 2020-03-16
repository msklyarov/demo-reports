const mysql = require('mysql2/promise');

const listServers = async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql',
  });

  try {
    const [rows] = await connection.execute(
      'SELECT DISTINCT table_schema AS db FROM information_schema.tables',
    );
    res.json({ success: true, rows });
  } catch (error) {
    res.json({ success: false, message: 'See logfile' });
  }
};

module.exports = listServers;
