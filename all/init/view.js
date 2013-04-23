module.exports = function(app, config, matador) {
  // Set up view rendering services
  app.set('view engine', 'html');
  app.register('.html', matador.engine);
};
