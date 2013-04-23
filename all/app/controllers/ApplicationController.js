module.exports = function(app, config) {
  return app.controllers.Base.extend(function() {
  }).methods({
    jsonCollectionOutput: function(res, result, error, error_code) {
      if (error) {
        app.log.debug("Response Error Code", {
          code: error_code,
          message: error
        });
        this.json(res, {
          status: {
            code: error_code,
            message: error
          }
        }, {}, error_code);
      } else {
        var response;
        // Result is an array of objects, not a data object
        if (v.is.arr(result)) {
          response = {
            status: {
              code: 200,
              message: 'OK'
            },
            data: result
          };
          // Determine if it is a model object
        } else if (result && (result._id || result.id)) {
          response = {
            status: {
              code: 200,
              message: 'OK'
            },
            data: result
          };
          // It is a data object
        } else {
          response = v.extend({
            status: {
              code: 200,
              message: 'OK'
            },
            data: []
          }, result);
        }
        // Reply to client
        this.json(res, response);
      }
    }
  });
};