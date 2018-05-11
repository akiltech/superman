/**
 * Const
 */
const PATH = require('path');
const FS = require('fs');
const PACKAGE = JSON.parse(FS.readFileSync(PATH.resolve(__dirname, '../../package.json'), 'utf8'));
const COLORS = require('colors');
const SHELL = require('shelljs');
const UPDATE_NOTIFIER = require('update-notifier');
const NOTIFY = require('node-notifier');
const PROGRAM = require('commander');
/**
 * Superman configuration
 * @type {{version: function(): string, name: function(): string}}
 */
const VERSION = PACKAGE.version;
const NAME = PACKAGE.name;
const CURRENT_DIRECTORY = process.cwd();

module.exports = {
    VERSION,
    NAME,
    PACKAGE,
    PATH,
    FS,
    COLORS,
    SHELL,
    UPDATE_NOTIFIER,
    PROGRAM,
    NOTIFY,
    CURRENT_DIRECTORY
};
