const {SPLIT_VERSION, WRITE_PACKAGE_FILE} = require('../actions/helpers.action');
/**
 * Update Package
 *
 * @param value
 * @param options
 */
const setVersion = (value, options) => {
    if (options.major) {
        setMajor(value);
    } else if (options.minor) {
        setMinor(value);
    } else if (options.patch) {
        setPatch(value)
    } else {
        setFileVersion(value);
    }
};

/**
 * Set MAJOR
 *
 * @param setValue
 */
const setMajor = (setValue) => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${setValue}.${version.minor}.${version.patch}`);
};

/**
 * Set MINOR
 *
 * @param setValue
 */
const setMinor = (setValue) => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${setValue}.${version.patch}`);
};

/**
 * Set PATCH
 *
 * @param setValue
 */
const setPatch = (setValue) => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${version.minor}.${setValue}`);
};

/**
 * Set version
 *
 * @param setValue
 */
const setFileVersion = (setValue) => {
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(setValue);
};

/**
 * Export module
 * @type {{updatePackage: updateVersion}}
 */
module.exports = {
    setVersion
};
