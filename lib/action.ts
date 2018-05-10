import * as fs from 'fs';
import * as path from 'path';

export class Action {

    static update = function () {
        //
    };

    static displayHelp = function(){
        console.log('help');
        process.exit();
    };
}
