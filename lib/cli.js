require('./config/fire');
/**
 * Const content
 */
const {UPDATE_NOTIFIER} = require('./config/superman.config');
/**
 * Notify application version
 */
const pkg = require('../package.json');
UPDATE_NOTIFIER({pkg}).notify();
/**
 * Call all commands
 */
require('./commands/kernel');
