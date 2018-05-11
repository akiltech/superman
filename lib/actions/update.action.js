const {version, path, currentDirectory, currentPackage} = require('../config/superman.config');

const updatePackage = (options) => {
    if (options.major) {
        changedOnMajor()
    } else if (options.minor) {
        changedOnMiror()
    }
};

const changedOnMajor: () => {
    //shell.exec('sed -i \'s/"version": "0.0.1"/"version": "1.0.0"/g\' test.json');
    console.log("Your file was changed in the major version");
};

const changedOnMinor: () => {
    console.log("Your file was changed in the minor version");
};

module.exports = {
    updatePackage
};
