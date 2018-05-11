const program = require('commander');
const {updatePackage} = require('../actions/update.action');

program
    .command('update:package')
    .description('')
    .option('-m, --major', 'Remove recursively')
    .option('-i, --minor', 'Remove recursively')
    .option('-p, --patch', 'Remove recursively')
    .action((options) => updatePackage(options));
