
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var protractor = require('protractor');

var KeyStrokeRepo = function KeyStrokeRepo () {

    KeyStrokeRepo.prototype.ENTER = function () {
        browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    KeyStrokeRepo.prototype.NUMPAD1 = function () {
        browser.driver.actions().sendKeys(protractor.Key.NUMPAD1).perform();
    };

    //Keystroke only on windows machine machine (safai is not working even with COMMAND)
    KeyStrokeRepo.prototype.CONTROL_ALL_DELETE = function () {
        browser.sleep(1000);
        browser.driver.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).sendKeys( protractor.Key.DELETE).perform();
        browser.sleep(1000);
    };
};
module.exports = new KeyStrokeRepo();