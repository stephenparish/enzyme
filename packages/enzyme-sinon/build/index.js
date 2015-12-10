'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.spySetup = spySetup;
exports.spyTearDown = spyTearDown;
exports.spyLifecycle = spyLifecycle;
exports.spyMethods = spyMethods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _onPrototype = require('./onPrototype');

var _onPrototype2 = _interopRequireDefault(_onPrototype);

var sinon = _sinon2['default'].sandbox.create();

exports.sinon = sinon;

function spySetup() {
  exports.sinon = sinon = _sinon2['default'].sandbox.create();
}

function spyTearDown() {
  sinon.restore();
}

function spyLifecycle(Component) {
  var sinonInstance = arguments.length <= 1 || arguments[1] === undefined ? sinon : arguments[1];

  (0, _onPrototype2['default'])(Component, function (proto, name) {
    return sinonInstance.spy(proto, name);
  });
}

function spyMethods(Component) {
  var sinonInstance = arguments.length <= 1 || arguments[1] === undefined ? sinon : arguments[1];

  (0, _onPrototype2['default'])(Component, null, function (proto, name) {
    return sinonInstance.spy(proto, name);
  });
}