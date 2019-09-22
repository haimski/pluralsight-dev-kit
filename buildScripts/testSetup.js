// this file isn't traspiled, so must use CommonJs and ES5

// Register babel to transpile before our test run
require('babel-register')();


// disable webpack features that mocha doesn't understand (disregard the css files)
require.extensions['.css'] = function(){};