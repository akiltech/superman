const {SHELL, CURRENT_DIRECTORY, COLORS, NAME, VERSION, NOTIFY} = require('../config/superman.config');
const {PACKAGE_CONTENT, PACKAGE_VERSION} = require('../actions/helpers.action');
/**
 * Update Package
 *
 * @param options
 */
const initVersion = (options) => {
    if (options.major) {
        initMajor(PACKAGE_CONTENT, PACKAGE_VERSION);
    } else if (options.minor) {
        initMinor(PACKAGE_CONTENT, PACKAGE_VERSION);
    } else if (options.patch) {
        initPatch(PACKAGE_CONTENT, PACKAGE_VERSION)
    } else {
        initFileVersion(PACKAGE_CONTENT, PACKAGE_VERSION);
    }
};
/**
 * Set MAJOR
 *
 * @param packageContent
 * @param packageVersion
 */
const initMajor = (packageContent, packageVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]),
        newVersion = `${0}.${minor}.${patch}`;

    /**
     * Output console
     */
    outputConsole();

    /**
     * Set Package value
     */
    SHELL.sed('-i', `"version": "${packageVersion}"`, `"version": "${newVersion}"`, `${CURRENT_DIRECTORY}/package.json`)

    /**
     * output notification
     */
    outputFinish(newVersion);
};
/**
 * Set MINOR
 *
 * @param packageContent
 * @param packageVersion
 */
const initMinor = (packageContent, packageVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        major = parseInt(version[0]),
        patch = parseInt(version[2]),
        newVersion = `${major}.${0}.${patch}`;

    /**
     * Output console
     */
    outputConsole();

    /**
     * Set Package value
     */
    SHELL.sed('-i', `"version": "${packageVersion}"`, `"version": "${newVersion}"`, `${CURRENT_DIRECTORY}/package.json`)

    /**
     * output notification
     */
    outputFinish(newVersion);
};
/**
 * Set PATCH
 *
 * @param packageContent
 * @param packageVersion
 */
const initPatch = (packageContent, packageVersion) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        newVersion = `${major}.${minor}.${0}`;

    /**
     * Output console
     */
    outputConsole();

    /**
     * Set Package value
     */
    SHELL.sed('-i', `"version": "${packageVersion}"`, `"version": "${newVersion}"`, `${CURRENT_DIRECTORY}/package.json`)

    /**
     * output notification
     */
    outputFinish(newVersion);
};
/**
 * Set version
 *
 * @param packageContent
 * @param packageVersion
 */
const initFileVersion = (packageContent, packageVersion) => {
    /**
     * Output console
     */
    outputConsole();

    /**
     * Set Package value
     */
    SHELL.sed('-i', `"version": "${packageVersion}"`, `"version": "0.0.0"`, `${CURRENT_DIRECTORY}/package.json`)

    /**
     * output notification
     */
    outputFinish('0.0.0');
};
/**
 * Output Console
 */
const outputConsole = () => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.grey(' Pleas wait tasks is running...'), '\n');
};
/**
 * Output notify
 * @param version
 */
const outputFinish = (version) => {
    NOTIFY.notify({
        title: 'Superman',
        message: `Oh yes!, your application version is now update to ${version}.`
    });
    console.log(COLORS.green(`  Oh yes!, your application version is now update to ${COLORS.yellow(version)}.`));
};
/**
 * Export module
 * @type {{updatePackage: initVersion}}
 */
module.exports = {
    initVersion
};
