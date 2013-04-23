module.exports = function(app, config) {
	// Load required files
	var winston = require('winston');

	// Start up logging service
	app.log = new (winston.Logger)({
	  levels: { 
	    debug: 0,
	    success: 1,
	    warning: 1,
	    notice: 2,
	    error: 2,
	    critical: 2
	  },
	  colors: {
	    debug: 'blue',
	    warning: 'yellow',
	    success: 'green',
	    notice: 'grey',
	    error: 'red',
	    critical: 'zebra'
	  },
	  transports: [
	    new (winston.transports.Console)({
	      level: (config.logging && config.logging.level) ? config.logging.level : 'debug',
	      colorize: true,
	      timestamp: true
	    })
	  ]
	});
};