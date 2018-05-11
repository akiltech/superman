const {WRITE_PACKAGE_FILE, PACKAGE_CONTENT, PACKAGE_VERSION} = require('../actions/helpers.action');
/**
 * Update Package
 *
 * @param options
 */
const updateVersion = (options) => {
    if (options.major) {
        updateMajor(PACKAGE_CONTENT, PACKAGE_VERSION);
    } else if (options.minor) {
        updateMinor(PACKAGE_CONTENT, PACKAGE_VERSION);
    } else if (options.patch) {
        updatePatch(PACKAGE_CONTENT, PACKAGE_VERSION)
    } else {
        updateFileVersion(PACKAGE_CONTENT, PACKAGE_VERSION);
    }
};
/**
 * Update MAJOR
 *
 * @param fileContent
 * @param fileVersion
 */
const updateMajor = (fileContent, fileVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = fileVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]),
        newVersion = `${++major}.${minor}.${patch}`,
        newContent = fileContent.replace(`"version":"${fileVersion}"`, `"version":"${newVersion}"`),
        newPackageContent = JSON.stringify(JSON.parse(newContent), null, 2);

    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(newVersion, newPackageContent);
};
/**
 * Update MINOR
 *
 * @param fileContent
 * @param fileVersion
 */
const updateMinor = (fileContent, fileVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = fileVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]),
        newVersion = `${major}.${++minor}.${patch}`,
        newContent = fileContent.replace(`"version":"${fileVersion}"`, `"version":"${newVersion}"`),
        newPackageContent = JSON.stringify(JSON.parse(newContent), null, 2);

    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(newVersion, newPackageContent);
};
/**
 * Update Patch
 *
 * @param fileContent
 * @param fileVersion
 */
const updatePatch = (fileContent, fileVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = fileVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]),
        newVersion = `${major}.${minor}.${++patch}`,
        newContent = fileContent.replace(`"version":"${fileVersion}"`, `"version":"${newVersion}"`),
        newPackageContent = JSON.stringify(JSON.parse(newContent), null, 2);

    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(newVersion, newPackageContent);
};
/**
 * Update file
 *
 * @param fileContent
 * @param fileVersion
 */
const updateFileVersion = (fileContent, fileVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = fileVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]);

    /**
     * Conditional
     */
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

    /**
     * Variables
     * @type {string}
     */
    let newVersion = `${major}.${minor}.${patch}`,
        newContent = fileContent.replace(`"version":"${fileVersion}"`, `"version":"${newVersion}"`),
        newPackageContent = JSON.stringify(JSON.parse(newContent), null, 2);

    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(newVersion, newPackageContent);
};
/**
 * Export module
 * @type {{updatePackage: updateVersion}}
 */
module.exports = {
    updateVersion
};
