'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  server.models.user.create({username: 'a', password: 'a', email: 'a@b.com'});
  server.models.user.create({username: 'b', password: 'b', email: 'b@b.com'});
  server.models.user.create({username: 'c', password: 'c', email: 'c@b.com'});
};
