const {PROGRAM, VERSION} = require('../config/superman.config');
const {defaultDisplay} = require('../actions/default.action');
const {initVersion} = require('../actions/init.action');
const {setVersion} = require('../actions/set.action');
const {updateVersion} = require('../actions/update.action');
/**
 * Default
 */
PROGRAM
    .version(VERSION);
/**
 * Version init command
 */
PROGRAM
    .command('version:init')
    .description('Update package.json file')
    .option('-h, --help', 'Output usage information')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((options) => initVersion(options));
/**
 * Version update command
 */
PROGRAM
    .command('version:update')
    .description('Update package.json file')
    .option('-h, --help', 'Output usage information')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((options) => updateVersion(options));
/**
 * Version set command
 */
PROGRAM
    .command('version:set [value]')
    .description('Set package.json file version')
    .option('-h, --help', 'Output usage information')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((value, options) => setVersion(value, options));
/**
 * Process argv
 */
PROGRAM.parse(process.argv);
/**
 * If not set process argv
 */
if (!process.argv.slice(2).length) {
    PROGRAM.outputHelp(defaultDisplay);
}
