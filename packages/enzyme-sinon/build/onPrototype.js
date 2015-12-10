'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = onPrototype;

function onPrototype(Component, lifecycle, method) {
  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (name) {
    if (typeof proto[name] !== 'function') return;
    switch (name) {
      case 'componentDidMount':
      case 'componentWillMount':
      case 'componentDidUnmount':
      case 'componentWillUnmount':
      case 'componentWillReceiveProps':
      case 'componentDidUpdate':
      case 'componentWillUpdate':
      case 'shouldComponentUpdate':
      case 'render':
        if (lifecycle) lifecycle(proto, name);
        break;
      case 'constructor':
        // don't spy on the constructor, even though it shows up in the prototype
        break;
      default:
        if (method) method(proto, name);
        break;
    }
  });
}

module.exports = exports['default'];