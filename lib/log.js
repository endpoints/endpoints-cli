const config = require('../config');
const util = require('util');
const chalk = require('chalk');

const slice = [].slice.call.bind([].slice);

// this hook is used for redirecting output for testing
exports.output = process.stdout;

var write = exports.write = function () {
  exports.output.write(
    config.logPrefix + util.format.apply(this, arguments) + '\n'
  );
};

exports.debug = function (msg) {
  if (!!require('../').debug) {
    write.apply(null, [chalk.gray(msg)].concat(slice(arguments, 1)));
  }
};

exports.error = function (msg) {
  write.apply(null, [chalk.red(msg)].concat(slice(arguments, 1)));
};

exports.ok = function (msg) {
  write.apply(null, [chalk.green(msg)].concat(slice(arguments, 1)));
};

exports.bar = function () {
  write(new Array(80).join('='));
};

exports.newline = function () {
  exports.output.write('\n');
};
