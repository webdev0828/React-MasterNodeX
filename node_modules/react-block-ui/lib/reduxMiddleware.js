'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var registered = exports.registered = [];

var register = exports.register = function register(fn) {
  if (registered.indexOf(fn) < 0) {
    registered.push(fn);
  }
};

var unregister = exports.unregister = function unregister(fn) {
  var index = registered.indexOf(fn);
  if (index > -1) {
    registered.splice(index, 1);
  }
};

exports.default = function () {
  return function (next) {
    return function (action) {
      registered.forEach(function (cb) {
        if (typeof cb === 'function') {
          cb(action);
        }
      });

      return next(action);
    };
  };
};