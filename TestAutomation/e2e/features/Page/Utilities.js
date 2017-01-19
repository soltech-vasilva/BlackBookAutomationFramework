/**
 * Created by Vsilva on 12/19/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var Utilities = function Utilities() {

    Utilities.prototype.ValueEntered = '';

    Utilities.prototype.ReplaceDoubleQuotesWithWhiteSpace = function (stringToReplace) {
        stringToReplace = stringToReplace.replace(/"/g, " ");
        return stringToReplace;
    };

    Utilities.prototype.SendKeysSlower = function (Element , strValue) {
        for (var i = 0; i < strValue.toString().length; i++) {
            var c = strValue.charAt(i);
            Element.sendKeys(c);
        }
    };

    Utilities.prototype.VerifyValueEntered_RetypeValue = function (Element,  ValueCompare , success) {
          return Element.getAttribute("value").then(function (currentValue) {
            this.ValueEntered = currentValue;
            //console.log('Value:|' + this.ValueEntered.toString() + '|');
            if (this.ValueEntered != ValueCompare) {
                // if  (this.ValueEntered != 'dd') {
                console.log(this.ValueEntered + ":Different:" + ValueCompare);

                //original
                Element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL, protractor.Key.DELETE, ValueCompare);

                //test on my mac computer
                //  Element.click().sendKeys(protractor.Key.COMMAND, "a", protractor.Key.NULL, protractor.Key.DELETE);
                //  browser.sleep(3000);
                // for (var i = 0; i < ValueCompare.toString().length; i++) {
                //     var c = ValueCompare.charAt(i);
                //     Element.sendKeys(c);
                // }

                //Element.clear();
                //browser.sleep(2000);
                //funciona
                //Element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL);
                //Element.sendKeys(protractor.Key.DELETE);
                //Element.sendKeys(ValueCompare);
                //funtiona
                //Element.click();
                //Element.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                //Element.sendKeys(protractor.Key.DELETE);
                //Element.sendKeys(ValueCompare);

            }
              if (this.ValueEntered != ValueCompare) {
                  console.log(this.ValueEntered + ":Different:" + ValueCompare);

                  //original
                  Element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL, protractor.Key.DELETE, ValueCompare);
              }
             return success();
        });

        // protractor.promise.all(flow.execute(extras)).then(success());
        //protractor.promise.all(extras).then(success());
        //Promise.all(extras);
       // Promise.all(extras).then(success());
    };

    Utilities.prototype.ExpectedElement_StopAutomationAtFail = function(element)
    {
        if (protractorConfig.config.StopRunAtFail == true) {
            browser.wait(protractor.ExpectedConditions.presenceOf(element), protractorConfig.config.WaitTime);
        }
        else {
            browser.driver.sleep(5000);
        }
    };
};
module.exports = new Utilities();