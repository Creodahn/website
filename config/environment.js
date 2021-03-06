/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'personal-website',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // apiURL: 'http://localhost:3000'
      apiURL: 'https://personal-website-backend-api.herokuapp.com'
    },
    'ember-froala-editor': {
      key: '7qinjvnepfsG4hbG-7=='
    }
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    store: 'session-store:local-storage',
    routeAfterAuthentication: 'main.about-me',
    routeIfAlreadyAuthenticated: 'main.about-me'
  };

  ENV.contentSecurityPolicy = {
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
    'font-src': "'self' https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    'connect-src': "'self' http://localhost:3000 https://personal-website-backend-api.herokuapp.com",
    'img-src': "'self' data:",
    'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
    'media-src': "'self'"
  };

  if(environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.apiURL = 'http://localhost:3000';
  }

  if(environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';
    // ENV.APP.apiURL = 'http://localhost:3000';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if(environment === 'production') {
    ENV.APP.apiURL = 'https://personal-website-backend-api.herokuapp.com';
  }

  return ENV;
};
