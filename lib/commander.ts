import * as program from 'commander';

import {VERSION} from "./superman.config";
import {Action} from "./action";

program
    .version(VERSION)
    .parse(process.argv);

if (program.args.length === 0)
    Action.displayHelp();
