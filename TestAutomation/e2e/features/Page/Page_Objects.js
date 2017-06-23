/**
 * Created by Vsilva on 1/30/17.
 */
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var protractor = require('protractor');

var Page_Objects = function Page_Objects () {

    var flow = browser.controlFlow();
    var page = this;

    /* * * * * * * * * * * * *
     * PROMISE / FLOW METHODS
     * * * * * * * * * * * * */

    /**
     * Execute a sequence of promises sequentially
     * @param {*[]} actionPromises
     * @returns {Promise}
     */

    page.executeSequence = function(actionPromises) {
        return protractor.promise.all(
            actionPromises.map(function(promise) {
                return flow.execute(function() { return promise; });
            })
        );
    };

    page.setResolution = function (int_width, int_height) {
        page.executeSequence([ browser.sleep(1000),
            browser.manage().window().setSize(int_width, int_height),
            browser.sleep(1000)]).then(()=>{});
    };

    /**
     * Opens the page.baseUrl appending the suffix parameter
     * @param {string} suffix
     * @returns {Promise}
     */
    page.openUrl = function(bool_IgnoreSynchronisation, str_URL, waitTime) {
        //page is non-angular
        browser.ignoreSynchronisation = bool_IgnoreSynchronisation;
        return page.executeSequence([
            browser.get(str_URL),
            browser.manage().window().setPosition(0,0),
            browser.sleep(waitTime)
        ]).then(()=>{});
    };

    page.verifyCurrentUrl = function (str_compareURL, element_PageVerify , WaitTime , success, failure) {
        return page.executeSequence([browser.getCurrentUrl().then(function (getCurrentURL) {
            var currentURL = getCurrentURL.split("://");
            var compareURL = str_compareURL.toString().split("://");

            if (currentURL[1].trim() === compareURL[1].trim()) {
                page.waitForElementTobePresent(element_PageVerify, WaitTime)
                    .then(() => {
                        success();
                    });
            }
            else {
                failure();
            }
        })]).then(() => {
        });
    };

    /**
     * Scroll to an element
     * @param {WebElement} element
     * @returns {Promise}
     */
    page.scrollTo = function(element) {
        return browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
    };

    /**
     * Waits for Angular to bootstrap before resolving
     * @returns {ElementFinder}
     */
    page.pageIsOpen = function () {
        browser.waitForAngular();
        return element(by.id('some-element-in-a-template-that-is-always-there')).isPresent();
    };

    /* * * * * * * * * * * * * * *
     * ELEMENT INTERACTION METHODS
     * * * * * * * * * * * * * * */

    /**
     * Click an element (uses browser.actions to avoid an IE bug)
     * @param {WebElement} element
     * @returns {Promise}
     */
    // page.click = function(element) {
    //     return page.executeSequence([
    //         // clear focus first to avoid a rare condition where the click only clears
    //         // focus from another element instead of actually clicking the thing you want
    //        // page.clearFocus(),
    //         browser.actions().click(element).perform()
    //     ]);
    // };

    page.clickElement = function(element, WaitTime) {
        // clear focus first to avoid a rare condition where the click only clears 
        // focus from another element instead of actually clicking the thing you want 
        // page.clearFocus(), 
        return page.executeSequence([
            page.waitForElementTobePresent(element, WaitTime),
             browser.actions().mouseMove(element).click().perform()
            //element.click()
        ]).then(()=>{});
    };

    page.clickButton = function(element, WaitTime, success) {
        return page.executeSequence([
            //browser.sleep(1000),
            //console.log('1'),
            page.clickElement(element, WaitTime).then(()=>{}),
            //console.log('2'),
            browser.getProcessedConfig().then((config) => {
                //added click element since Firefox and safari does not like clearfocus in clickButton
                // console.log('config.capabilities.browserName: '+config.capabilities.browserName);
                if (config.capabilities.browserName.toLowerCase() !== 'firefox' && config.capabilities.browserName.toLowerCase() !== 'safari') {
                   // console.log("clear focus");
                    //  browser.sleep(1000);
                    page.clearFocus().then(()=>{});
                }

                success();
            })//,
            // success()
            //  console.log('3')
        ]).then(() => {
            //console.log('4')
            // success();
        });


        // return page.executeSequence([browser.sleep(1000), page.clickElement(element, WaitTime),
        //     page.clearFocus()
        // ]).then(() => {
        //     success();
        // });
    };

    page.verifyElementNotInPage = function ( element ,WaitTime, success) {
        return page.executeSequence([browser.wait(protractor.ExpectedConditions.stalenessOf(element), WaitTime)])
            .then(() => {
                success();
            });
    };

    page.verifyMessageDisplay = function ( element , errorMessage, WaitTime, success, failure) {
        return  page.executeSequence([browser.sleep(1000),page.waitForElementTobePresent(element, WaitTime),
            browser.isElementPresent(element).then((isPresente) => {
                page.AssertElementsToDisplay(isPresente, element, errorMessage, 'It is not showing any message', success, failure);
            })]).then(() => {
        });
    };

    page.AssertElementsToDisplay = function (isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay , success, failure ) {

        if (isElementPresent === true) {
            return  page.executeSequence([page.ExpectTextEqualsTo(elementToCheck, compareValuesString, success, failure)]).then(()=>{});
        }
        else {
            console.log(consoleErrorMessageDisplay);
            // process.exit(1);
            failure();
        }
    };

    page.ExpectTextEqualsTo = function(elementToCheck, compareValuesString, success, failure){
        return page.executeSequence([elementToCheck.getText().then((Text)=>{
            if (Text.trim() === compareValuesString) {
                success();
            }
            else {
                console.log('Text: |'+Text+'| is not equal to compareValuesString: |'+ compareValuesString+'|');
                failure();
            }
        })]);
        //this kill script and dont fail gracely and report are blank "DONT USE EXPECT
        // expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
    };

    /**
     * Give focus to an element (just a descriptive alias for a click)
     * @param {WebElement} element
     * @returns {Promise}
     */
    // page.focus = function(element) {
    //     return page.click(element);
    // };

    page.focus = function(element, success) {
        return page.executeSequence([page.clickElement(element)]).then(() => {
            success();
        });
    };

    /**
     * Clears focus from any element by clicking on the body
     * @returns {Promise}
     */
    page.clearFocus = function () {
        return browser.actions().mouseMove({x: 9999, y: 9999}).click().perform();
    };

    /**
     * Hover on an element
     * @param {WebElement} element
     * @returns {Promise}
     */
    page.hover = function(element) {
        return browser.actions().mouseMove(element).perform();
    };

    /**
     * Send a sequence of keystrokes to the element (e.g. for entering a value into an input)
     * @param {WebElement} element
     * @param {string} value
     * @returns {Promise}
     */
    // page.fill = function (element, value) {
    //     return element.sendKeys(value);
    // };

    page.fill = function ( element , str_SendValue, WaitTime , elementClearFocus , success) {
        return page.executeSequence([page.clickElement(element, WaitTime).then(() => {
                if (str_SendValue !== '') {
                    page.executeSequence([
                        element.sendKeys(str_SendValue),
                        page.VerifyValueEntered_RetypeValue(element, str_SendValue),
                    ]).then(() => {
                        page.clearFocus().then(() => {
                            success();
                        });
                    });
                    //  page.focus(elementClearFocus, success).then(()=>{});});
                }
                else
                {
                    page.clearFocus().then(()=>{success ();});
                    // page.focus(elementClearFocus, success).then(()=>{});
                }
            })]).then(()=>{});
    };

    page.VerifyValueEntered_RetypeValue = function (element,  ValueCompare ) {
        var ValueEntered = '';
        var count = 0;

        return page.executeSequence([element.getAttribute("value").then( (currentValue)=> {
            page.executeSequence([ ValueEntered = currentValue,
                browser.getProcessedConfig().then((config) => {
                //console.log('BEFORE: ValueEntered:'+ValueEntered + ":Different:" + 'ValueCompare'+ValueCompare);
                while ( ValueEntered !== ValueCompare && ValueEntered !== null) {
                    console.log('AFTER: ValueEntered:'+ValueEntered + ":Different:" + 'ValueCompare'+ValueCompare); 
                    // console.log('config.capabilities.os: |' + config.capabilities.os + '|'); 
                    //  console.log(" config.capabilities.browserName: " +  config.capabilities.browserName);  
                    if (config.capabilities.browserName === 'safari' || config.capabilities.os === undefined) {
                        //console.log('Mycomputer'); 
                        page.executeSequence([browser.sleep(1000), element.click().sendKeys(protractor.Key.COMMAND, "a", protractor.Key.NULL, protractor.Key.DELETE), browser.sleep(1000), page.SendKeysSlower(element, ValueCompare, browser.sleep(1000))])
                            .then(() => {
                            });
                    } else {
                        page.executeSequence([browser.sleep(1000), element.click().sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL, protractor.Key.DELETE), browser.sleep(1000), page.SendKeysSlower(element, ValueCompare), browser.sleep(1000)])
                            .then(() => {
                            });
                    }
                    count++;
                    if (count === 2) {
                        break;
                    }
                }
            })]).then(()=>{});
        })]).then(()=>{});
    };
      
    page.SendKeysSlower = function (Element , strValue) {
        for (var i = 0; i < strValue.toString().length; i++) {
            var c = strValue.charAt(i);
            Element.sendKeys(c);
        }
    };   

    page.ClickDeleteContent = function( elementToClick, elementClearFocus, success) {
       return page.executeSequence([ page.clickElement(elementToClick),
        keyStrokesRepo.CONTROL_ALL_DELETE(elementToClick),
         page.clearFocus()
           //page.focus(elementClearFocus, success)
       ]).then(()=>{success();});
    };
    /**
     * Clears any content from an input before entering a new value
     * @param {WebElement} element
     * @param {string} value
     * @returns {Promise}
     */

    // page.clearAndFill = function(element, value) {
    //     return page.executeSequence([
    //         element.clear(),
    //         page.fill(element, value)
    //     ]);
    // };

    /**
     * Gets the content of an element (value if an input)
     * @param {WebElement} element
     * @returns {Promise}
     */

page.VerifyDropdownAttributeValue = function (element , verifyDropdownName,success, failure ) {
    return page.executeSequence([page.getContent(element).then((attributeValue) => {
        //console.log("text:" + attributeValue);
        if (verifyDropdownName.toString().toLowerCase() === attributeValue.toString().toLowerCase()) {
            success();
        }
        else {
            failure();
        }
    })]).then(() => {
    });
};

    page.getContent = function(element) {
        return page.executeSequence([element.getAttribute('value')
            .then(function (val) {
                return (val === null) ?
                    element.getText() :
                    val;
            })]);
    };

    /**
     * Check to see if an element has a class assigned
     * @param {WebElement} element
     * @param {string} className
     * @returns {Promise}
     */
    page.hasClass = function(element, className) {
        return element.getAttribute('class').then(function (classes) {
            return !!classes && classes.split(' ').indexOf(className) !== -1;
        });
    };

    /**
     * Selects an item in dropdown by index
     * @param {WebElement} dropdown
     * @param {number} index
     */
    page.selectDropdownItemByIndex = function(dropdown, index) {
        return page.executeSequence([
            page.clickElement(dropdown),
            dropdown.all(by.tagName('option')).get(index).click(),
            page.clearFocus()
        ]);
    };

    /**
     * Selects an item in dropdown by label
     * @param {WebElement} dropdown
     * @param {string} label
     */
    page.selectDropdownItemByLabel = function(dropdown, label) {
        return page.executeSequence([
            page.clickElement(dropdown),
            dropdown.all(by.css('option[label="' + label.toString().toLowerCase() + '"]')).first().click(),
            page.clearFocus()
        ]);
    };

    /**
     * Selects an item in dropdown by value
     * @param {WebElement} dropdown
     * @param {string} value
     */
    page.selectDropdownItemByValue = function(dropdown, value, success, elementClearFocus) {
        return page.executeSequence([
            page.clickElement(dropdown),
           // dropdown.all(by.css('option[value="' + value.toString().toLowerCase() + '"]')).first().click(),
            dropdown.all(by.css('option[value="' + value.toString().toLowerCase() + '"]')).click(),
            browser.getProcessedConfig().then((config) => {
                //Only firefox , it wont select item
                if (config.capabilities.browserName === 'firefox') {
                    console.log('firefox:'+value);
                    page.executeSequence([
                   // dropdown.sendKeys("All"),
                    //dropdown.sendKeys(protractor.Key.ENTER),
                    //page.clickElement(dropdown),
                    //dropdown.sendKeys("use"),
                   // dropdown.sendKeys(protractor.Key.ENTER),
                    page.clickElement(dropdown)]).then(()=>{});
                }

                if (config.capabilities.browserName === 'Edge') {
                    //Dont remove Added this Edge did not close dropdown, so click again close it.
                    page.clickElement(dropdown).then(()=>{});
                }
            })
        ]).then(()=>{
            page.clearFocus().then(()=>{success();});
        });
    };

    /* * * * * * * * * * * * * * *
     * WAITING FOR THINGS
     * * * * * * * * * * * * * * */

    /**
     * Waits until a particular element is present on the page
     * @returns {Promise}
     */
    page.waitForElementTobePresent = function(element , WaitTime) {
       return page.executeSequence([browser.wait(protractor.ExpectedConditions.presenceOf(element), WaitTime), browser.sleep(1000)]).then(()=>{});
    };
};
module.exports =  new Page_Objects();