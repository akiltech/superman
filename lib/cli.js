const {UPDATE_NOTIFIER, NOTIFY, PROGRAM, VERSION} = require('./config/superman.config');
const {defaultDisplay} = require('./actions/default.action');
/**
 * Notify application version
 */
const pkg = require('../package.json');
UPDATE_NOTIFIER({pkg}).notify();

PROGRAM
    .version(VERSION)
    .on('--help', defaultDisplay());
/**
 * Call all commands
 */
require('./commands/kernel');

PROGRAM.parse(process.argv);

if (PROGRAM.args.length === 0) {
    defaultDisplay();
}
