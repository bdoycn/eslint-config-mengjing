const jsConfig = require('./javascript');

const reactConfig = {
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
};

module.exports = {
  ...jsConfig,
  ...reactConfig,
};
