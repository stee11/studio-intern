module.exports = function(app, config) {
  return app.getController("Application", true).extend(

  function() {
  }).methods({
    /*
    The index function is used for rendering the index page.  If you look at the
    routes.js file, you will see that anyone going to the home page http://localhost:8000/
    will be sent to this controller (Home) to the index function
    */
    index: function(req, res) {
      /*
      Data is passed into the render function below.  The render function will
      output any variables onto the index html page (found in /all/app/views/index.html)
      */
      var data = {
        layout: 'layouts/main',
      };
      this.render(res, 'index', data);
    },
    api: function(req, res) {
      /*
      This function will create the correct headers to render out JSON output.  All that
      is printed out to the page is the {"data":"No data"}.
      */
      this.jsonCollectionOutput(res, {
        data: "No data"
      });
    }
  });
};