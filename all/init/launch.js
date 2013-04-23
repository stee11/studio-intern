module.exports = function(app, config, matador) {
  // Load required files
  var cluster = require('cluster'),
    numCPUs = require('os').cpus().length,
    toobusy = require('toobusy');

  // Pre start
  app.prefetch();
  app.mount();
  var argv = matador.argv,
    port = argv.port || process.env.PORT || (config.base ? config.base.port : false) || 8000

  // Start up servers
  if (cluster.isMaster) {
    // Fork workers
    for(var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    // On spawn
    cluster.on('fork', function(worker) {
      app.log.debug('Node Server', {
        action: 'Spawning',
        pid: worker.process.pid
      });
    });
    // Online
    cluster.on('online', function(worker) {
      app.log.debug('Node Server', {
        action: 'Initialize',
        pid: worker.process.pid
      });
    });
    // Listening
    cluster.on('listening', function(worker) {
      app.log.notice('Node Server', {
        action: 'Running',
        pid: worker.process.pid,
        port: port
      });
    });
    // Died
    cluster.on('exit', function(worker, code, signal) {
      app.log.critical('Node Server', {
        action: 'Died',
        pid: worker.process.pid
      });
      cluster.fork();
    });

  } else {
    app.listen(port);
    // Handle shutdown gracefully
    process.on("SIGINT", function() {
      app.log.debug("Server shutting down");
      toobusy.shutdown();
      process.exit();
    })
  }
};
