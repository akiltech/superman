/**
 * Const
 */
const path = require('path');
const fs = require('fs');
const PACKAGE = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8'));
/**
 * Superman configuration
 * @type {{version: function(): string, name: function(): string}}
 */
const version = PACKAGE.version;
const name = PACKAGE.name;

module.exports = {
    version, name, PACKAGE
};
