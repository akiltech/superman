const program = require('commander');
const {initVersion} = require('../actions/init.action');

program
    .command('version:init')
    .description('Update package.json file')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .option('-h, --help', 'Display init help')
    .action((options) => initVersion(options));
