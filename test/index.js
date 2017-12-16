'use strict';

var expect    = require('chai').expect;
var kospr_cli = require('../index');

describe('#kospr_cli', function() {
    it('should show the Kospr_cli version', function() {
        var result = kospr_cli.version();
        expect(result).to.equal('0.1.0');
    });
    it('should show the Kospr version', function() {
        var result = kospr_cli.version_kospr(function(version){console.log(version)});
        expect(result).to.equal('0.1.0');
    });         
});