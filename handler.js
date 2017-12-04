'use strict';

const HelloWorld = require('./lib/hello-world');

module.exports.helloWorld = (event, context, callback) => {

  var hWorld = new HelloWorld();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(hWorld.sayHello(event)),
  };

  callback(null, response);
};