module.exports = function(app, config) {
  return app.getController("Application", true).extend(

  function() {
  }).methods({
    index: function(req, res) {
      var data = {
        layout: 'layouts/main',
      };
      this.render(res, 'index', data);
    },
    api: function(req, res) {
      this.jsonCollectionOutput(res, {
        data: "No data"
      });
    }
  });
};