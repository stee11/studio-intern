module.exports = function(app, config) {
  return app.getController("Application", true).extend(

  function() {
  }).methods({
    number: function(req, res) {
      this.jsonCollectionOutput(res, {
        data: Math.random()
      });
    },
  });
};