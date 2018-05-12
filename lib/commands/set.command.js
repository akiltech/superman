const {PROGRAM} = require('../config/superman.config');
const {setVersion} = require('../actions/set.action');

PROGRAM
    .command('version:set <value>')
    .description('Set package.json file version')
    .option('-m, --major', 'Increment package.json version major')
    .option('-i, --minor', 'Increment package.json version minor')
    .option('-p, --patch', 'Increment package.json version patch')
    .action((value, options) => setVersion(value, options))
    .on('--help', function () {
        console.log('set');
    });
