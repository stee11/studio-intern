module.exports = function(app, config, matador) {
  // Start up matador cache
  app.registerHelper('Cache', matador.helpers.CacheHelper);
  // Use the cache helper's no-cache middleware.
  app.use(app.getHelper('Cache').auditHeadersMiddleware);
  app.use(app.getHelper('Cache').noCacheMiddleware);
};
