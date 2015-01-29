const endpoints = module.exports = require('commander');

endpoints
  .command('thing')
  .description('do something.')
  .action(function() {
    require('./commands/thing')(process.cwd());
  });

endpoints.parse(process.argv);

if (process.argv.length === 2) {
  endpoints.help();
}
