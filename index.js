var path = require('path');
var browserify = require('browserify-incremental');

var b = browserify({
  cacheFile: path.join(__dirname, 'browserify-cache.json')
}).require('./foo.js');

console.log('bundling...')
b.bundle(function() {
  console.log('bundle callback');
});
