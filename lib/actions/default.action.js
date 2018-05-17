const COLORS = require('colors');
const {VERSION, NAME} = require('../config/superman.config');

const defaultDisplay = () => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman <command> [arguments] [options]'), '\n');

    console.log(COLORS.cyan('   version:update'), ' ', 'Auto increment package.json version');
    console.log(COLORS.cyan('   version:set'), '    ', 'Set package.json file version');
    console.log(COLORS.cyan('   version:init'), '   ', 'Initialize package.json file version');

    console.log('\n', COLORS.bold('Options'));
    console.log(COLORS.cyan('   -m, --major'), '    ', 'Display help information');
    console.log(COLORS.cyan('   -i, --minor'), '    ', 'Display help information');
    console.log(COLORS.cyan('   -p, --patch'), '    ', 'Display help information');
    console.log(COLORS.cyan('   -h, --help'), '     ', 'Output usage information');
    console.log(COLORS.cyan('   -V, --version'), '  ', 'Output the version number', '\n');

    process.exit();
};

const helpUpdateDisplay = () => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman version:update [options]'), '\n');

    console.log(COLORS.cyan('   -m, --major'), ' ', 'Auto increment major');
    console.log(COLORS.cyan('   -i, --minor'), ' ', 'Auto increment minor');
    console.log(COLORS.cyan('   -p, --patch'), ' ', 'Auto increment patch', '\n');
    console.log();
};

const helpInitDisplay = () => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman version:init [options]'), '\n');

    console.log(COLORS.cyan('   -m, --major'), ' ', 'Initialize major value');
    console.log(COLORS.cyan('   -i, --minor'), ' ', 'Initialize minor value');
    console.log(COLORS.cyan('   -p, --patch'), ' ', 'Initialize patch value', '\n');
    console.log();
};

const helpSetDisplay = () => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman version:set [value] [options]'), '\n');

    console.log(COLORS.cyan('   -m, --major'), ' ', 'Initialize major value');
    console.log(COLORS.cyan('   -i, --minor'), ' ', 'Initialize minor value');
    console.log(COLORS.cyan('   -p, --patch'), ' ', 'Initialize patch value', '\n');
    console.log();
};

module.exports = {
    defaultDisplay,
    helpUpdateDisplay,
    helpInitDisplay,
    helpSetDisplay
};
