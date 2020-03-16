const restRoutes = app => {
  app.use('/api/v0/sqlDb', require('./api/v0/sqlDb'));
};

module.exports = restRoutes;
