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

    Utilities.prototype.RefreshPage = function () {
        return new Promise((success, failure) => {
            page.executeSequence([browser.refresh(),
                success()]).then(() => {
            });
        });
    };

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

    Utilities.prototype.Verify_BlackBookPage_Applitools = function (namePage, eyesSetUp, eyes) {
        return new Promise((success, failure) => {
            page.executeSequence([browser.driver.sleep(1000),
                eyesSetUp.EyesCheckWindow(eyes, namePage, protractorConfig.config.ApplitoolsOn),
                browser.driver.sleep(1000)]).then(() => {
                success();
            });
        });
    };

    Utilities.prototype.ExpectedElement_StopAutomationAtFail = function(element)
    {
        if (protractorConfig.config.StopRunAtFail == true) {
            page.waitForElementTobePresent(element, protractorConfig.config.WaitTime).then(() => {
            });
        }
        else {
            page.executeSequence([browser.driver.sleep(5000)]).then(()=>{});
        }
    };

    Utilities.prototype.ElapsedTime = function(startTime)
    {
        console.log('Elapsed time: ' + Math.round((((new Date().getTime() - startTime)/1000)/60)*100)/100 + ' minutes');
    };

    Utilities.prototype.VerifyActualURLLoaded = function (partURL, VerifyURL) {
        return new Promise((success, failure) => {
            page.executeSequence([browser.driver.sleep(4000),
                browser.driver.wait(browser.driver.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");

                        switch (partURL) {
                            case 'part':
                                var modURL1 = currentURL[1].split('/');
                                var modURL2 = modURL1[0] + '/' + modURL1[1];
                                console.log(modURL2);

                                if (modURL2.trim() == VerifyURL) {
                                    browser.driver.sleep(2000);
                                    success();
                                }
                                break;

                            case 'full':
                                console.log(currentURL[1].trim());
                                if (currentURL[1].trim() == VerifyURL) {
                                    browser.driver.sleep(2000);
                                    success();
                                }
                                break;

                            default:
                                failure();
                        }
                    })
                )]).then(() => {
            });
        });
    };

    Utilities.prototype.VerifyValueEntered_RetypeValue = function (Element,  ValueCompare ) {
          return browser.driver.wait(Element.getAttribute("value").then(function (currentValue) {
              this.ValueEntered = currentValue;

              var count = 0;
              // if (this.ValueEntered != ValueCompare) {
              //if  (this.ValueEntered != 'dd') {
              //while (this.ValueEntered != 'dd') {
              while (this.ValueEntered != ValueCompare) {
                  console.log(this.ValueEntered + ":Different:" + ValueCompare);

                  page.executeSequence([Element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL, protractor.Key.DELETE), browser.sleep(1000), Utilities.prototype.SendKeysSlower(Element, ValueCompare)])
                      .then(()=>{});

                  count++;
                  if (count == 3) {
                      break;
                  }
              }
          }));
    };

    Utilities.prototype.VerifyButtonStatus_isEnableorDisable = function(Element , isEnableOrDisable, success, failure) {
        if (isEnableOrDisable.toString().toLowerCase() == "enable") {
            page.executeSequence([browser.driver.sleep(1000),browser.driver.wait(protractor.ExpectedConditions.elementToBeClickable(Element), protractorConfig.config.WaitTime)]).then(() => {
                success();
            });
        }
        else if (isEnableOrDisable.toString().toLowerCase() == "disable") {
            page.executeSequence([page.waitForElementTobePresent(Element, protractorConfig.config.WaitTime),
            Element.getAttribute("disabled").then((attribute) => {
                if (attribute == 'true') {
                    return success();
                }
                else {
                    console.log("button Attribute: " + attribute);
                    return failure();
                }
            })]).then(()=>{});
        }
    }
};
module.exports = new Utilities();