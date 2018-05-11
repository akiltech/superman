const {PROGRAM} = require('../config/superman.config');
const {updateVersion} = require('../actions/update.action');

PROGRAM
    .command('version:update')
    .description('Update package.json file')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((options) => updateVersion(options));
