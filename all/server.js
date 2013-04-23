// Import settings/required files
var matador = require('matador'),
  env = process.env.NODE_ENV || 'development',
  config = require('./app/config/' + env),
  app = matador.createApp(__dirname, config, {});

// Initialize services
app.configure(function() {
  // Set up logging
  require('./init/logging')(app, config);
  // Set up view
  require('./init/view')(app, config, matador);
  // Set up middleware
  require('./init/middleware')(app, config, matador);
  // Set up error handling
  require('./init/error-handler')(app, config, matador);
});

// Launch instances
require('./init/launch')(app, config, matador);