'use strict';

let expect = require('chai').expect;
const {VERSION, NAME} = require('../lib/config/superman.config');

describe('config', function() {
    it('should package version', function() {
        expect(VERSION).to.equal('0.1.0');
    });

    it('should app name is correct', function() {
        expect(NAME).to.equal('superman');
    });
});
