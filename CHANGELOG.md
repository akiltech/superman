# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.1.3](https://github.com/TheMartianGeeks/superman/releases/tag/0.1.0) - 2018-05-11

### Added

__Update Version__
* Add command `version:update`  with flag `--m MAJOR, --i MINOR, --p PATCH`

__Set Version__
* Add command `version:set`  with flag `--m MAJOR, --i MINOR, --p PATCH`

__Init Version__
* Add command `version:init`  with flag `--m MAJOR, --i MINOR, --p PATCH`

### Fixed

* Read file if not exist `error`. Now we have a notification if file does't exist.
* Use `shelljs` to write file from any superman `cmd`
* Showing help if you run `superman -h` or `superman --help`
