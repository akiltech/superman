const {SHELL, CURRENT_DIRECTORY, COLORS, NAME, VERSION, NOTIFY} = require('../config/superman.config');
const {PACKAGE_CONTENT, PACKAGE_VERSION} = require('../actions/helpers.action');
/**
 * Update Package
 *
 * @param value
 * @param options
 */
const setVersion = (value, options) => {
    if (options.major) {
        setMajor(PACKAGE_CONTENT, PACKAGE_VERSION, value);
    } else if (options.minor) {
        setMinor(PACKAGE_CONTENT, PACKAGE_VERSION, value);
    } else if (options.patch) {
        setPatch(PACKAGE_CONTENT, PACKAGE_VERSION, value)
    } else {
        setFileVersion(PACKAGE_CONTENT, PACKAGE_VERSION, value);
    }
};
/**
 * Set MAJOR
 *
 * @param packageContent
 * @param packageVersion
 * @param setValue
 */
const setMajor = (packageContent, packageVersion, setValue) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        minor = parseInt(version[1]),
        patch = parseInt(version[2]),
        newVersion = `${setValue}.${minor}.${patch}`;

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
 * @param setValue
 */
const setMinor = (packageContent, packageVersion, setValue) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        major = parseInt(version[0]),
        patch = parseInt(version[2]),
        newVersion = `${major}.${setValue}.${patch}`;

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
 * @param setValue
 */
const setPatch = (packageContent, packageVersion, setValue) => {
    /**
     * Variables
     * @type {*|string[]}
     */
    let version = packageVersion.split('.'),
        major = parseInt(version[0]),
        minor = parseInt(version[1]),
        newVersion = `${major}.${minor}.${setValue}`;

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
 * @param setValue
 */
const setFileVersion = (packageContent, packageVersion, setValue) => {
    /**
     * Output console
     */
    outputConsole();

    /**
     * Set Package value
     */
    SHELL.sed('-i', `"version": "${packageVersion}"`, `"version": "${setValue}"`, `${CURRENT_DIRECTORY}/package.json`)

    /**
     * output notification
     */
    outputFinish(setValue);
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
 * @type {{updatePackage: updateVersion}}
 */
module.exports = {
    setVersion
};
