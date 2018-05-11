const program = require('commander');
const {updatePackage} = require('../actions/update.action');

program
    .command('update:package')
    .description('Update package.json file')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((options) => updatePackage(options));
