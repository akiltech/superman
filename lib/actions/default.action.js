const COLORS = require('colors');
const {version, name} = require('../config/superman.config');

const defaultDisplay = () => {
    console.log('\n', COLORS.white.bold(name), COLORS.cyan.bold(version));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman <command> [options] [arguments]'), '\n');
    console.log(COLORS.cyan('   update:package'), ' ', 'Update package.json version');

    console.log('\n', COLORS.bold('Set'));
    console.log(COLORS.cyan('   set:major'), '      ', 'Set major version.');
    console.log(COLORS.cyan('   set:minor'), '      ', 'Set minor version.');
    console.log(COLORS.cyan('   set:patch'), '      ', 'Set patch version.');
    console.log(COLORS.cyan('   set:version'), '    ', 'Set version package.json');

    console.log('\n', COLORS.bold('Initialize'));
    console.log(COLORS.cyan('   init:major'), '     ', 'Initialize major value.');
    console.log(COLORS.cyan('   init:minor'), '     ', 'Initialize minor value.');
    console.log(COLORS.cyan('   init:patch'), '     ', 'Initialize patch value.');
    console.log(COLORS.cyan('   init:version'), '   ', 'Initialize version.');

    console.log('\n', COLORS.bold('Options'));
    console.log(COLORS.cyan('   -h, --help'), '     ', 'Display help information');
    console.log(COLORS.cyan('   -V, --version'), '  ', 'Display application version', '\n');

    process.exit();
};

module.exports = {
    defaultDisplay
};