const program = require('commander');
const {defaultDisplay} = require('./actions/default.action');
/**
 * Call all commands
 */
require('./commands/kernel');

program.parse(process.argv);

if (program.args.length === 0) {
    defaultDisplay();
}
