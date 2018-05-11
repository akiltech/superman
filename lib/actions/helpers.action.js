const {CURRENT_DIRECTORY, FS, COLORS, NOTIFY, NAME, VERSION} = require('../config/superman.config');

const PACKAGE_CONTENT = JSON.stringify(require(`${CURRENT_DIRECTORY}/package.json`));

const PACKAGE_VERSION = require(`${CURRENT_DIRECTORY}/package.json`).version;

const WRITE_PACKAGE_FILE = (NEW_VERSION, NEW_PACKAGE_CONTENT) => {
    console.log('\n', COLORS.white.bold(NAME), COLORS.cyan.bold(VERSION));
    console.log('\n', COLORS.grey(' Pleas wait tasks is running...'), '\n');

    FS.writeFile(`${CURRENT_DIRECTORY}/package.json`, NEW_PACKAGE_CONTENT, { flat: 'w' }, function (err) {
        if (err) {
            return console.log(COLORS.red(err));
        }
        NOTIFY.notify({
            title: 'Superman',
            message: `Oh yes!, your application version is now update to ${NEW_VERSION}.`
        });
        console.log(COLORS.green(`  Oh yes!, your application version is now update to ${COLORS.yellow(NEW_VERSION)}.`));
    });
};

module.exports = {
    PACKAGE_CONTENT,
    PACKAGE_VERSION,
    WRITE_PACKAGE_FILE
};
