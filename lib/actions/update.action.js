const {version, path, currentDirectory, currentPackage} = require('../config/superman.config');

const updatePackage = (options) => {
    console.log(currentPackage);
};

module.exports = {
    updatePackage
};
