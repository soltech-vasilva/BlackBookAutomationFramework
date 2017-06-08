
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var protractor = require('protractor');

var KeyStrokeRepo = function KeyStrokeRepo () {

    KeyStrokeRepo.prototype.ENTER = function (element) {

                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();

    };

    KeyStrokeRepo.prototype.NUMPAD1 = function () {
        browser.driver.actions().sendKeys(protractor.Key.NUMPAD1).perform();
    };

    //Keystroke only on windows machine machine (safai is not working even with COMMAND)
    KeyStrokeRepo.prototype.CONTROL_ALL_DELETE = function (elementToClick) {
        browser.getProcessedConfig().then((config) => {
           // console.log(config);
           // console.log('config.capabilities.os: |'+config.capabilities.os+'|');
          //  console.log(" config.capabilities.browserName: " +  config.capabilities.browserName);
            browser.driver.sleep(1000);

            if (config.capabilities.browserName == 'safari' || config.capabilities.os === undefined) {
                console.log('Mycomputer');
                if (config.capabilities.browserName == 'firefox') {
                    elementToClick.sendKeys(protractor.Key.chord(protractor.Key.COMMAND, 'a')).sendKeys(protractor.Key.DELETE);
                } else {
                    browser.actions().sendKeys(protractor.Key.chord(protractor.Key.COMMAND, 'a')).sendKeys(protractor.Key.DELETE).perform();
                }
            }
            else {
                browser.driver.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).sendKeys(protractor.Key.DELETE).perform();
            }
        });
    };

    KeyStrokeRepo.prototype.ARROWDOWN = function () {
        browser.driver.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    };
};
module.exports = new KeyStrokeRepo();