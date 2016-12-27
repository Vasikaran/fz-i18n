'use strict';
const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');
var fs = require("fs");

var count = 0;
module.exports = {
    process(src, filename) {
    if (babel.util.canCompile(filename)) {
      var a = babel.transform(src, {
        filename,
        presets: [jestPreset],
        retainLines: true,
      }).code;
      return a;
    }
    return src;
  },
};
