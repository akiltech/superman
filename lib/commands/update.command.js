const program = require('commander');

program
    .command('update:package [env]', 'Update your package file version')
    .action(function (env) { 
        console.log('setup for %s env(s)', env);
    });
