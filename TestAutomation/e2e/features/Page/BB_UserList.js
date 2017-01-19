/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_userListRepo = require('../Repository/BB_userListRepo.js');
var utilities = require('../Page/Utilities.js');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractor = require('protractor');


var BB_UserList = function BB_UserList() {

    BB_UserList.prototype.FilterValue = '';

    BB_UserList.prototype.Click_NewUser_Button = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_NewUserButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_NewUserButton.click().then(()=> {
                success();
            });
        });
    };

    BB_UserList.prototype.EnterValueToFilter_FilterUseList = function (stringFilter) {
        this.FilterValue = utilities.ReplaceDoubleQuotesWithWhiteSpace(stringFilter.toString());
        //browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_FilterUserListTextbox), protractorConfig.config.WaitTime);
        BB_userListRepo.Select_Element_FilterUserListTextbox.click();
        utilities.SendKeysSlower(BB_userListRepo.Select_Element_FilterUserListTextbox, this.FilterValue);

        if (this.FilterValue != '') {
            return new Promise((success, failure)=> {
                if (this.currentPassword != '') {
                    browser.wait(utilities.VerifyValueEntered_RetypeValue( BB_userListRepo.Select_Element_FilterUserListTextbox, this.FilterValue,success));
                }
                else {
                    success();
                }
            });
        }
    };

    BB_UserList.prototype.Click_StatusFilter = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_StatusFilter.click().then(()=> {
                success();
            });
        });
    };

    BB_UserList.prototype.Click_StatusFilter_Inactive_Submenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu), protractorConfig.config.WaitTime);

        return new Promise((success, failure)=> {
            //EDGE BUG does not like to sendkeys to element.
            BB_userListRepo.Select_Element_FilterUserListTextbox.click();
            browser.driver.actions().sendKeys(protractor.Key.TAB).perform();
            browser.driver.actions().sendKeys('i').perform();
            browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
            BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu.click();
            browser.driver.sleep(1000);
            success();
        });
    };

    BB_UserList.prototype.Click_GearIcon = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_EditGeardIcon), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_EditGeardIcon.click().then(()=> {
                success();
            });
        });
    };

    BB_UserList.prototype.Click_Gear_Deactivate_Submenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Deactivate_Submenu), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_Gear_Deactivate_Submenu.click().then(()=> {
                keyStrokesRepo.ENTER();
                browser.driver.sleep(1000);
                success();
            });
        });
    };

    BB_UserList.prototype.Click_Gear_Activate_Submenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Activate_Submenu), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_Gear_Activate_Submenu.click().then(()=> {
                keyStrokesRepo.ENTER();
                browser.driver.sleep(1000);
                success();
            });
        });
    };

    BB_UserList.prototype.Click_Gear_View_Submenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_View_Submenu), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_Gear_View_Submenu.click().then(()=> {
                keyStrokesRepo.ENTER();
                browser.driver.sleep(1000);
                success();
            });
        });
    };
};
module.exports = new BB_UserList();