module.exports = function(app) {
  return {
    // Index page
    '/': {
      'get': 'Home.index'
    },
    // Fallbacks
    '/api': {
      'get': 'Home.api',
    },
    'api/number': {
      'get': 'Number.number',
    },
    '/api/*': {
      'get': 'Home.api',
    },


    //Hints:
    /*
    'url_route': {
      'method type': 'Controller.function'
    }

    Example: a client that goes to http://localhost:8000/api using their browser
    will be caught by the '/api' route and go to the 'Home' controller, to the 'api' function
    */
  };
};
