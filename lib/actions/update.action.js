const {version, path, currentDirectory, currentPackage, currentPackageVersion, fs, COLORS} = require('../config/superman.config');

const updatePackage = (options) => {
    if (options.major) {
        updateMajor();
    } else if (options.minor) {
        updateMinor();
    } else if (options.patch) {
        updatePatch()
    } else {
        if (!currentPackage) {
            alert('error');
        }

        updateVersion(currentPackage, currentPackageVersion);
    }
};

const updateMajor = () => {
    //
};

const updateMinor = () => {
    //
};

const updatePatch = () => {
    //
};

const updateVersion = (fileContent, fileVersion) => {
    let version = fileVersion.split('.');
    let major = parseInt(version[0]);
    let minor = parseInt(version[1]);
    let patch = parseInt(version[2]);
    let newVersion;
    let newContent;
    let newPackageFile;

    if (minor === 0 || minor < 99) {
        if (patch === 0 || patch < 99) {
            ++patch;
        }else if (patch === 99) {
            patch = 0;
            ++minor;
        }
    }else if (minor === 99) {
        minor = 0;
        ++major;
    }

    newVersion = `${major}.${minor}.${patch}`;
    newContent = fileContent.replace(`"version":"${fileVersion}"`, `"version":"${newVersion}"`);

    newPackageFile = JSON.stringify(JSON.parse(newContent), null, 2);

    fs.writeFile(`${currentDirectory}/package.json`, newPackageFile, { flat: 'w' }, function (err) {
        console.log(COLORS.cyan('\nRunning package.json versioning tasks'));
        if (err) {
            return console.log(COLORS.red(err));
        }
        console.log(COLORS.green(`Updating application version ${COLORS.yellow(newVersion)}`));
        console.log(`${COLORS.green('Update version module to ')}${COLORS.yellow(`${currentDirectory}/package.json`)}\n`);
    });
};

module.exports = {
    updatePackage
};
