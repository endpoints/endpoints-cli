const spinner = require('char-spinner');
const log = require('../lib/log');

module.exports = function (dir) {
  log.write('registering...');
  log.debug('processing...');
  spinner();
  setTimeout(function () {
    log.ok('done.');
  }, 2000)
};
