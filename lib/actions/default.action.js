const COLORS = require('colors');
const {version, name} = require('../config/superman.config');

const defaultDisplay = () => {
    console.log('\n', COLORS.white.bold(name), COLORS.cyan.bold(version));
    console.log('\n', COLORS.yellow.bold('USAGE:'), COLORS.grey(' superman <command> [options] [arguments]'), '\n');

    console.log(COLORS.cyan('   version:update'), ' ', 'Auto increment package.json version');
    console.log(COLORS.cyan('   version:set'), '    ', 'Set package.json file version');
    console.log(COLORS.cyan('   version:init'), '   ', 'Initialize package.json file version');

    console.log('\n', COLORS.bold('Options'));
    console.log(COLORS.cyan('   -h, --help'), '     ', 'Display help information');
    console.log(COLORS.cyan('   -V, --version'), '  ', 'Display application version', '\n');

    process.exit();
};

module.exports = {
    defaultDisplay
};
