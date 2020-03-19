const mysql = require('mysql2/promise');

const listServers = async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr',
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM candidates');
    res.json({ success: true, rows });
  } catch (error) {
    res.json({ success: false, message: 'See logfile' });
  }
};

module.exports = listServers;
