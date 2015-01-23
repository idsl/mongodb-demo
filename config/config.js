var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mongodb-demo'
    },
    port: 3000,
    db: 'mongodb://localhost/mongodb-demo-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mongodb-demo'
    },
    port: 3000,
    db: 'mongodb://localhost/mongodb-demo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mongodb-demo'
    },
    port: 3000,
    db: 'mongodb://localhost/mongodb-demo-production'
  }
};

module.exports = config[env];
