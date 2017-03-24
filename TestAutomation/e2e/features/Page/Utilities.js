/**
 * Created by Vsilva on 12/19/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var page = require ('../Page/Page_Objects');


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

    Utilities.prototype.VerifyValueEntered_RetypeValue = function (Element,  ValueCompare ) {
          return browser.driver.wait(Element.getAttribute("value").then(function (currentValue) {
              this.ValueEntered = currentValue;
              //console.log('Value:|' + this.ValueEntered.toString() + '|');
              var count = 0;
              // if (this.ValueEntered != ValueCompare) {
              //if  (this.ValueEntered != 'dd') {
              //while (this.ValueEntered != 'dd') {
              while (this.ValueEntered != ValueCompare) {
                  console.log(this.ValueEntered + ":Different:" + ValueCompare);
                  //original
                  page.executeSequence([Element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL, protractor.Key.DELETE), browser.sleep(1000), Utilities.prototype.SendKeysSlower(Element, ValueCompare)])
                      .then(()=>{});

                  //test on my mac computer COMMAND
                  // page.executeSequence([Element.click().sendKeys(protractor.Key.COMMAND, "a", protractor.Key.NULL, protractor.Key.DELETE), browser.sleep(1000), Utilities.prototype.SendKeysSlower(Element, ValueCompare)])
                  //     .then(()=>{});

                  count++;
                  if (count == 3) {
                      break;
                  }
              }
          }));
    };

    Utilities.prototype.ExpectedElement_StopAutomationAtFail = function(element)
    {
        if (protractorConfig.config.StopRunAtFail == true) {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(element), protractorConfig.config.WaitTime)]).then(()=>{});
        }
        else {
            page.executeSequence([browser.driver.sleep(5000)]).then(()=>{});
        }
    };

    Utilities.prototype.ElapsedTime = function(startTime)
    {
        console.log('Elapsed time: ' + Math.round((((new Date().getTime() - startTime)/1000)/60)*100)/100 + ' minutes');
    };

    Utilities.prototype.VerifyButtonStatus_isEnableorDisable = function(Element , isEnableOrDisable, success, failure)
    {
        if (isEnableOrDisable.toString().toLowerCase() == "enable") {
            browser.driver.wait(protractor.ExpectedConditions.elementToBeClickable(Element),3000);
            return success();
        }
        else if (isEnableOrDisable.toString().toLowerCase() == "disable") {

            Element.getAttribute("disabled").then((attribute)=> {
                if (attribute == 'true') {
                    return success();
                }
                else {
                    console.log("button Attribute: " + attribute);
                    return failure();
                }
            });
        }
    }
};
module.exports = new Utilities();