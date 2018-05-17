const {WRITE_PACKAGE_FILE, SPLIT_VERSION} = require('../actions/helpers.action');
const {helpUpdateDisplay} = require('../actions/default.action');
/**
 * Update Package
 *
 * @param options
 */
const updateVersion = (options) => {
    if (options.major) {
        updateMajor();
    } else if (options.minor) {
        updateMinor();
    } else if (options.patch) {
        updatePatch();
    } else if (options.help === undefined) {
        helpUpdateDisplay();
    } else {
        updateFileVersion();
    }
};

/**
 * Update MAJOR
 *
 */
const updateMajor = () => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${++version.major}.${version.minor}.${version.patch}`);
};

/**
 * Update MINOR
 *
 */
const updateMinor = () => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${++version.minor}.${version.patch}`);
};

/**
 * Update Patch
 *
 */
const updatePatch = () => {
    let version = SPLIT_VERSION();
    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${version.minor}.${++version.patch}`);
};

/**
 * Update file
 *
 */
const updateFileVersion = () => {
    let version = SPLIT_VERSION();
    /**
     * Conditional
     */
    if (version.minor === 0 || version.minor < 99) {
        if (version.patch === 0 || version.patch < 99) {
            ++version.patch;
        }else if (version.patch === 99) {
            version.patch = 0;
            ++version.minor;
        }
    }else if (version.minor === 99) {
        version.minor = 0;
        ++version.major;
    }

    /**
     * Write package file
     */
    WRITE_PACKAGE_FILE(`${version.major}.${version.minor}.${version.patch}`);
};

/**
 * Export module
 * @type {{updatePackage: updateVersion}}
 */
module.exports = {
    updateVersion
};
