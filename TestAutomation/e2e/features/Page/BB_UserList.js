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
var page = require ('../Page/Page_Objects');
var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');

var BB_UserList = function BB_UserList() {

    BB_UserList.prototype.FilterValue = '';

    BB_UserList.prototype.Click_NewUser_Button = function () {

        return new Promise((success, failure)=> {
            page.executeSequence([ browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_NewUserButton), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_NewUserButton.click()]).then(()=> {
                success();
            });
        });
    };

    BB_UserList.prototype.EnterValueToFilter_FilterUseList = function (stringFilter) {
        this.FilterValue = utilities.ReplaceDoubleQuotesWithWhiteSpace(stringFilter.toString());
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_FilterUserListTextbox), protractorConfig.config.WaitTime);
        page.executeSequence([ page.click(BB_userListRepo.Select_Element_FilterUserListTextbox)]).then (()=>{utilities.SendKeysSlower(BB_userListRepo.Select_Element_FilterUserListTextbox, stringFilter );});

        if (this.FilterValue != '') {
            return new Promise((success, failure)=> {
                if (this.currentPassword != '') {
                    browser.driver.wait(utilities.VerifyValueEntered_RetypeValue( BB_userListRepo.Select_Element_FilterUserListTextbox, this.FilterValue)).then(()=> {
                        success();
                    });
                }
                else {
                    success();
                }
            });
        }
    };

    BB_UserList.prototype.Click_StatusFilter = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_userListRepo.Select_Element_StatusFilter), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_StatusFilter.click()]).then (()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter), protractorConfig.config.WaitTime);
        // return new Promise((success, failure)=> {
        //     BB_userListRepo.Select_Element_StatusFilter.click().then(()=> {
        //         success();
        //     });
        // });
    };

    BB_UserList.prototype.Click_StatusFilter_Inactive_Submenu = function () {

        return new Promise((success, failure)=> {
            //EDGE BUG does not like to sendkeys to element.
           // page.executeSequence([ BB_userListRepo.Select_Element_FilterUserListTextbox.click(), browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),  browser.driver.actions().sendKeys('i').perform(), browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(), BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu.click() ]).then(()=>{success();});
            page.executeSequence([ browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu), protractorConfig.config.WaitTime),
            BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu.click(),
                //browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),
                browser.driver.actions().sendKeys('i').perform(),
                browser.driver.sleep(1000),
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform()]).then(()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });
    };

    BB_UserList.prototype.Click_StatusFilter_All_Submenu = function () {

        return new Promise((success, failure)=> {
            //EDGE BUG does not like to sendkeys to element.
            // page.executeSequence([ BB_userListRepo.Select_Element_FilterUserListTextbox.click(), browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),  browser.driver.actions().sendKeys('i').perform(), browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(), BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu.click() ]).then(()=>{success();});
            page.executeSequence([ browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter_All_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_StatusFilter_All_Submenu.click(),
                //browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),
                //browser.driver.actions().sendKeys('a').perform(),
                browser.driver.sleep(1000),
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform()]).then(()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });
    };

    BB_UserList.prototype.Click_StatusFilter_Active_Submenu = function () {

        return new Promise((success, failure)=> {
            //EDGE BUG does not like to sendkeys to element.
            // page.executeSequence([ BB_userListRepo.Select_Element_FilterUserListTextbox.click(), browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),  browser.driver.actions().sendKeys('i').perform(), browser.driver.actions().sendKeys(protractor.Key.ENTER).perform(), BB_userListRepo.Select_Element_StatusFilter_Inactive_Submenu.click() ]).then(()=>{success();});
            page.executeSequence([ browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_StatusFilter_Active_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_StatusFilter_Active_Submenu.click(),
                //browser.driver.actions().sendKeys(protractor.Key.TAB).perform(),
                // browser.driver.actions().sendKeys('a').perform(),
                // browser.driver.sleep(1000),
                // browser.driver.actions().sendKeys('a').perform(),
                browser.driver.sleep(1000),
                browser.driver.actions().sendKeys(protractor.Key.ENTER).perform()]).then(()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });
    };

    BB_UserList.prototype.Click_GearIcon = function (numberElementToSelect) {
        var index = parseInt(numberElementToSelect) - 1;
        return new Promise((success, failure)=> {
            //browser.driver.wait(BB_userListRepo.Select_Element_EditGeardIcon.get(index).click()).then(()=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_EditGeardIcon.get(index)), protractorConfig.config.WaitTime),
            BB_userListRepo.Select_Element_EditGeardIcon.get(index).click()]).then(()=> {
                 success();
            });
        });
    };

    BB_UserList.prototype.Click_Gear_Deactivate_Submenu = function () {
         return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_userListRepo.Select_Element_Gear_Deactivate_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_Gear_Deactivate_Submenu.click(), keyStrokesRepo.ENTER(), browser.driver.sleep(1000)]).then (()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });
    };

    BB_UserList.prototype.Click_Gear_Activate_Submenu = function () {

        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_userListRepo.Select_Element_Gear_Activate_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_Gear_Activate_Submenu.click(), keyStrokesRepo.ENTER(), browser.driver.sleep(1000)]).then (()=>{ BB_editUserProfile.Click_TittleofPage(BB_userListRepo.Select_Element_TittleUserList, success);});
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Activate_Submenu), protractorConfig.config.WaitTime);
        // return new Promise((success, failure)=> {
        //     page.executeSequence([BB_userListRepo.Select_Element_Gear_Activate_Submenu.click(),
        //         browser.driver.sleep(1000),
        //         keyStrokesRepo.ENTER(), browser.driver.sleep(1000),success()]).then(()=>{});
        // });
    };

    BB_UserList.prototype.Click_Gear_View_Submenu = function (rowNumber) {

        return new Promise((success, failure) => {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div['+rowNumber.toString()+']/div[9]/action-icon/div/div/ul/li[1]/div'))), protractorConfig.config.WaitTime),
                element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div['+rowNumber.toString()+']/div[9]/action-icon/div/div/ul/li[1]/div')).click()
            ]).then(() => {
                 success();
            });
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_View_Submenu), protractorConfig.config.WaitTime);
        // return new Promise((success, failure)=> {
        //     page.executeSequence([BB_userListRepo.Select_Element_Gear_View_Submenu.click(), keyStrokesRepo.ENTER(),browser.driver.sleep(1000)]).then(()=> { success();});
        // });
    };

    BB_UserList.prototype.Click_Gear_Edit_Submenu = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Edit_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_Gear_Edit_Submenu.click(), keyStrokesRepo.ENTER(), browser.driver.sleep(1000)]).then(()=> {   success();});
        });
    };

    BB_UserList.prototype.Click_Gear_Delete_Submenu = function () {

        return new Promise((success, failure)=> {
            page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Delete_Submenu), protractorConfig.config.WaitTime),
                BB_userListRepo.Select_Element_Gear_Delete_Submenu.click(), keyStrokesRepo.ENTER(), browser.driver.sleep(1000)]).then(()=> {   success(); });
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_Gear_Delete_Submenu), protractorConfig.config.WaitTime);
        // return new Promise((success, failure)=> {
        //     page.executeSequence([BB_userListRepo.Select_Element_Gear_Delete_Submenu.click(), keyStrokesRepo.ENTER(), browser.driver.sleep(1000)]).then(()=> { success(); });
        // });
    };
};
module.exports = new BB_UserList();