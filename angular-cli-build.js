/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'angular2-cookie/**/*.js',
      'rxjs/**/*.js',
      'bootstrap/**/**/*.js',
      'bootstrap/**/**/*.css',
      'font-awesome/**/*.*',
      'jquery/**/*.js',
      '@angular/**/*.js'
    ]
  });
};
