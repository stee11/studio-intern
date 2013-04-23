module.exports = function(app, config, matador) {
  // Development
  app.configure('development', function() {
    app.use(matador.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
};
