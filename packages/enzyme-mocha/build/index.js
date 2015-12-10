'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.jsdomSetup = jsdomSetup;
exports.jsdomTeardown = jsdomTeardown;
exports.describeWithDOM = describeWithDOM;
var jsdomify = undefined;

try {
  jsdomify = require('jsdomify');
  jsdomify.create();
  require('react'); // require react explicitly after jsdomify.create() has been called
  jsdomify.destroy();
} catch (e) {
  // jsdom is not supported
}

function jsdomSetup() {
  if (!jsdomify) return;
  jsdomify.create();
}

function jsdomTeardown() {
  if (!jsdomify) return;
  jsdomify.destroy();
}

function describeWithDOM(a, b) {
  describe('(uses jsdom)', function () {
    if (typeof jsdom === 'function') {
      beforeEach(jsdomSetup);
      afterEach(jsdomTeardown);
      describe(a, b);
    } else {
      // if jsdom isn't available, skip every test in this describe context
      describe.skip(a, b);
    }
  });
}