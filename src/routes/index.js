const requireDirectory = require('require-directory');

const management = Object.values(requireDirectory(module, './management'));

const routes = [
  ...management,
];

module.exports = routes;