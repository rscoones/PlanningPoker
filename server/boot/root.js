'use strict';
var path = require('path');
var express = require('express');

var assets = path.resolve(__dirname, '../public/assets');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.use('/api', server.loopback.rest());
  router.use('/assets', express.static(assets));
  router.get('/*', function(req, res, next) {
    res.sendFile('index.html', {
      root: path.resolve(__dirname, '../public/'),
    });
  });
  server.use(router);
};
