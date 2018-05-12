const {SPLIT_VERSION, WRITE_PACKAGE_FILE} = require('../actions/helpers.action');
/**
 * Update Package
 *
 * @param options
 */
const initVersion = (options) => {
    if (options.major) {
        initMajor();
    } else if (options.minor) {
        initMinor();
    } else if (options.patch) {
        initPatch()
    } else {
        initFileVersion();
    }
};

/**
 * Set MAJOR
 *
 */
const initMajor = () => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${0}.${version.minor}.${version.patch}`);
};

/**
 * Set MINOR
 *
 */
const initMinor = () => {
    let version = SPLIT_VERSION();
    /**
     /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${0}.${version.patch}`);
};

/**
 * Set PATCH
 *
 */
const initPatch = () => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${version.minor}.${0}`);
};

/**
 * Set version
 */
const initFileVersion = () => {
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE('0.0.0');
};

/**
 * Export module
 * @type {{updatePackage: initVersion}}
 */
module.exports = {
    initVersion
};
