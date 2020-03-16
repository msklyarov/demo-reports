const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const addRestRoutes = require('../rest');

module.exports = () => {
  const app = express();

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(cors());

  addRestRoutes(app);

  return app;
};
