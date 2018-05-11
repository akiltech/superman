
var shell = require("shelljs");

const updatePackage = (options) => {
    if (options.major) {
        changedOnMajor()
    } else if (options.minor) {
        changedOnMiror()
    }
};

function changedOnMajor() {
    //shell.exec('sed -i \'s/"version": "0.0.1"/"version": "1.0.0"/g\' test.json');
    console.log("Your file was changed in the major version");
}

function changedOnMiror() {
    console.log("Your file was changed in the minor version");
}

module.exports = {
    updatePackage
};
