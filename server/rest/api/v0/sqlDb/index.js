const express = require('express');

const router = express.Router();

router.get('/listServers', require('./listServers'));
router.get('/listDbs', require('./listDbs'));
router.get('/listTables', require('./listTables'));

module.exports = router;
