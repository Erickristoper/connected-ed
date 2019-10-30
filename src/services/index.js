const users = require('./users/users.service.js');
const organizations = require('./organizations/organizations.service.js');
const campaigns = require('./campaigns/campaigns.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(organizations);
  app.configure(campaigns);
};
