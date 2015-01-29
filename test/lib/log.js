const log = require('../../lib/log');
const chalk = require('chalk');
const config = require('../../config');
const expect = require('chai').expect;

describe('log', function() {

  describe('::write', function() {

    it('should write to process.stdout with a prefix', function() {
      log.output = {
        write: function(data) {
          expect(data).to.equal(config.logPrefix + 'testing' + '\n');
        }
      };
      log.write('testing');
    });

  });

  describe('::debug', function() {

    it('should call #write with a message in gray', function() {
      require('../../').debug = true;
      log.output = {
        write: function(data) {
          expect(data).to.equal(config.logPrefix + chalk.gray('debug') + '\n');
        }
      };
      log.debug('debug');
    });

  });

  describe('::error', function() {

    it('should call #write with a message in gray', function() {
      log.output = {
        write: function(data) {
          expect(data).to.equal(config.logPrefix + chalk.red('error') + '\n');
        }
      };
      log.error('error');
    });

  });

  describe('::ok', function() {

    it('should call ::write with a message in green', function() {
      log.output = {
        write: function(data) {
          expect(data).to.equal(config.logPrefix + chalk.green('ok') + '\n');
        }
      };
      log.ok('ok');
    });

  });

});
