const program = require('commander');

/**
 * Call all commands
 */
require('./commands/kernel');

program.parse(process.argv);
