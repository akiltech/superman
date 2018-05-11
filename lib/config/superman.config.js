/**
 * Const
 */
const path = require('path');
const fs = require('fs');
const PACKAGE = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8'));
const COLORS = require('colors');
/**
 * Superman configuration
 * @type {{version: function(): string, name: function(): string}}
 */
const version = PACKAGE.version;
const name = PACKAGE.name;
const currentDirectory = process.cwd();
const currentPackage = JSON.stringify(require(`${currentDirectory}/package.json`)) || null;
const currentPackageVersion = require(`${currentDirectory}/package.json`).version || null;

module.exports = {
    version,
    name,
    PACKAGE,
    path,
    fs,
    COLORS,
    currentDirectory,
    currentPackage,
    currentPackageVersion
};
