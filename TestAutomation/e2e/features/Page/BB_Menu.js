var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_menuRepo = require('../Repository/BB_MenuRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var page = require ('../Page/Page_Objects');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_roleListRepo = require('../Repository/BB_RoleListRepo.js');

var BB_Menu = function BB_Menu() {

    BB_Menu.prototype.Click_HomeTab = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_menuRepo.Select_Element_HomeTab, protractorConfig.config.WaitTime, success);
        });
    };

    BB_Menu.prototype.Click_AdminTab = function () {
        return new Promise((success, failure) => {
            page.executeSequence([
                page.clickElement(BB_menuRepo.Select_Element_AdminTab, protractorConfig.config.WaitTime),
                browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_AdminTab).perform().then(()=>{  success();})
            ]).then(() => {success();});
        });
    };

    BB_Menu.prototype.Click_Users_Submenu = function () {
        // return new Promise((success, failure) => {
        //     console.log('this.index:' + this.index);
        //     page.executeSequence([
        //         browser.getProcessedConfig().then((config) => {
        //
        //             if (config.capabilities.browserName == 'Firefox') {
        //                 //added click element since Firefox does not like clearfocus in clickButton
        //                 page.executeSequence([page.clickElement(BB_menuRepo.Select_Element_UsersSubMenuButton, protractorConfig.config.WaitTime),
        //                     page.focus(BB_roleListRepo.Select_Element_TittleRoleListProfileText,success)
        //                 ]).then(() => {});
        //             }
        //             else{
        //                 page.clickButton(BB_menuRepo.Select_Element_UsersSubMenuButton,protractorConfig.config.WaitTime, success);
        //             }
        //         })]).then(() => {});
        // });

        return new Promise((success, failure) => {
            page.clickButton(BB_menuRepo.Select_Element_UsersSubMenuButton,protractorConfig.config.WaitTime, success);
        });
    };

    BB_Menu.prototype.Click_Roles_Submenu = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_menuRepo.Select_Element_RolesSubMenuButton, protractorConfig.config.WaitTime, success);
        });
    };

    BB_Menu.prototype.Click_Settings_Submenu = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_menuRepo.Select_Element_SettingsSubMenuButton, protractorConfig.config.WaitTime, success);
        });
    };

    BB_Menu.prototype.Click_AvatarImageButton = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([page.clickElement(BB_menuRepo.Select_Element_ProfileButton, protractorConfig.config.WaitTime),
                browser.driver.sleep(1000),
                browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_ProfileButton).perform().then(()=>{success();})
            ]).then(() => {});
        });
    };

    BB_Menu.prototype.Click_MyProfileSubmenu = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([page.clickElement(BB_menuRepo.Select_Element_MyProfileSubMenuButton,protractorConfig.config.WaitTime ),
                page.focus(BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText,success)]).then(()=>{});
        });
    };

    BB_Menu.prototype.Click_LogOutSubmenu = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_menuRepo.Select_Element_LogOutSubMenuButton,protractorConfig.config.WaitTime,success );
        });
    };

    BB_Menu.prototype.Verify_ButtonNotInPage_Menu = function (buttonName) {
        return new Promise((success, failure) => {
            page.verifyElementNotInPage(BB_menuRepo.Select_Element_SettingsSubMenuButton, 4000, success);
        });
    };
};
module.exports = new BB_Menu();