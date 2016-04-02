var should = require('chai').should();
var _ = require('../index');
var rgbHex = require('rgb-hex');
var hexRgb = require('hex-rgb');

describe('generate', function () {
    it('should return same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = _.generate("test");
        var hex2 = _.generate("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should differ when using different seeds', function () {
        var hex = _.generateWithSeed("test", 123);
        var hex2 = _.generateWithSeed("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return null on null text', function () {
        var hex = _.generate(null);
        should.not.exist(hex);
    });

    it('should return more reddish color', function () {
        var hex = _.generate("i am a red fox");
        var rgb = hexRgb(hex);
        rgb[0].should.be.above(rgb[1]);
        rgb[0].should.be.above(rgb[2]);
    });

    it('should mix multiple color names with text', function () {
        var hex = _.generate("red green blue");
        hex.should.not.be.equal(rgbHex(255 / 3, 128 / 3, 255 / 3));
    });

    it('should return different hex when using different factors', function () {
        var hex = _.generateWithFactor("test", 123);
        var hex2 = _.generateWithFactor("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should generate hex when provided seed and factor', function () {
        var hex = _.generateWithSeedFactor("test", 123, 123);
        should.exist(hex);
    });

    it('should generate 6 hex chars when seed is too low', function () {
        var hex = _.generateWithSeed("test", 1);
        hex.length.should.be.equal(6);
    });
});
describe('generateAny', function () {
    it('should return color from null', function () {
        var hex = _.generateAny(null);
        should.exist(hex);
    });

    it('should return color from any object', function () {
        var obj = {test: {test: 'test'}, test2: 'test2'};
        var hex = _.generateAny(obj);
        should.exist(hex);
    });

    it('should return same hex when same string provided', function () {
        var hex = _.generateAny("test");
        var hex2 = _.generateAny("test");
        hex.should.be.equal(hex2);
    });

    it('should return not same hex when same string provided', function () {
        var hex = _.generateAny("test");
        var hex2 = _.generateAny("test2");
        hex.should.not.be.equal(hex2);
    });

    it('should differ when using different seeds', function () {
        var hex = _.generateAnyWithSeed("test", 123);
        var hex2 = _.generateAnyWithSeed("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return different hex when using different factors', function () {
        var hex = _.generateAnyWithFactor("test", 123);
        var hex2 = _.generateAnyWithFactor("test", 321);
        hex.should.not.be.equal(hex2);
    });

    it('should return same value as generate', function () {
        var hex = _.generateAny("test");
        var hex2 = _.generate("test");
        hex.should.be.equal(hex2);
    });

    it('should generate hex when provided seed and factor', function () {
        var hex = _.generateAnyWithSeedFactor("test", 123, 123);
        should.exist(hex);
    });
});