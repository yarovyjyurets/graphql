const rootMutation = require('./mutation');
const userQueries = require('./models/user');
const postQueries = require('./models/post');

module.exports = {
  ...userQueries,
  ...postQueries,
  ...rootMutation,
};