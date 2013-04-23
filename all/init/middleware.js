module.exports = function(app, config, matador) {
  // Load required files
  var flash = require('connect-flash'),
    toobusy = require('toobusy');
  // Overloaded server fix
  app.use(function(req, res, next) {
    if (toobusy()) {
      res.send(503, "High server load.  Please try again later.");
    } else {
      next();
    }
  });
  // Use cookie parser middlware
  app.use(matador.cookieParser());
  // Enable flash messages
  app.use(flash());
  // Parse query params
  app.use(matador.query());
  // Use body parser middlware
  app.use(matador.bodyParser({
    keepExtensions: true,
    uploadDir: '/public/uploads'
  }));
  app.use(app.requestDecorator());
  app.use(app.preRouter());
  app.use(app.router({}));
};
