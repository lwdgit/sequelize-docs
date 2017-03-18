var pkg = require('./package.json')
module.exports = {
  root: (process.argv[4] || 'en-US').split('/').slice(1).join(''),
  title: 'test search plus plugin',
  plugins: ['-lunr', '-search', 'search-plus'],

  variables: {
    version: pkg.version
  }
}
