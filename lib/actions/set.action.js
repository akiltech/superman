const {SPLIT_VERSION, WRITE_PACKAGE_FILE, END_PROCESS_IF_VALUE_IS_EMPTY} = require('../actions/helpers.action');
const {helpSetDisplay} = require('../actions/default.action');
/**
 * Update Package
 *
 * @param value
 * @param options
 */
const setVersion = (value, options) => {
    END_PROCESS_IF_VALUE_IS_EMPTY(value);

    if (options.major) {
        END_PROCESS_IF_VALUE_IS_EMPTY(value);
        setMajor(value);
    } else if (options.minor) {
        END_PROCESS_IF_VALUE_IS_EMPTY(value);
        setMinor(value);
    } else if (options.patch) {
        END_PROCESS_IF_VALUE_IS_EMPTY(value);
        setPatch(value)
    } else if (options.help === undefined) {
        helpSetDisplay();
    } else {
        END_PROCESS_IF_VALUE_IS_EMPTY(value);
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
