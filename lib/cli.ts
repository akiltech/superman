import 'commander';

var program = require('commander');

program
    .version('0.0.1')
    .option('-l, --list [list]', 'list of customers in CSV file')
    .parse(process.argv)

console.log(program.list);