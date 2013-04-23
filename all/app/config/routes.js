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
    '/api/*': {
      'get': 'Home.api',
    },
  };
};
