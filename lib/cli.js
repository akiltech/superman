const {UPDATE_NOTIFIER, PROGRAM, VERSION} = require('./config/superman.config');
const {defaultDisplay} = require('./actions/default.action');
/**
 * Notify application version
 */
const pkg = require('../package.json');
UPDATE_NOTIFIER({pkg}).notify();

PROGRAM
    .version(VERSION);
/**
 * Call all commands
 */
require('./commands/kernel');

PROGRAM.parse(process.argv);
