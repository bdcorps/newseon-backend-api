var express = require('express');
var router = express.Router();

var contentURLLists = {

    // Development Environment
  
    development: {
      database: {
        host: '127.0.0.1',
        login: 'dev',
        password: 'dev'
      }
    },
  
    // Production Environment
  
    production: {
      database: {
        host: '127.0.0.1',
        login: 'prod',
        password: 'prod'
      }
    }
  };

  export const contentURLLists;

  module.exports = contentURLLists;