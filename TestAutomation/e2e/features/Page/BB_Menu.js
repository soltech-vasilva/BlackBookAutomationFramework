var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_menuRepo = require('../Repository/BB_MenuRepo.js');
var utilities = require('../Page/Utilities.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var captureBrowserCapabilities = require ('../Page/CaptureBrowserCapabilities.js');
var page = require ('../Page/Page_Objects');

var BB_Menu = function BB_Menu() {

    BB_Menu.prototype.Click_AvatarImageButton = function () {
       // browser.sleep(3000);
       // browser.executeScript("return $(\"a:contains ('button'\").mousemover();");
        //browser.executeScript("document.getElementsByClassName('profile-img')[0].scrollIntoView();");
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_ProfileButton), protractorConfig.config.WaitTime);
        browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_ProfileButton).perform();
        return new Promise((success, failure)=> {
            page.executeSequence([ BB_menuRepo.Select_Element_ProfileButton.click()]).then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_MyProfileSubmenu = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_MyProfileSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            page.executeSequence([ BB_menuRepo.Select_Element_MyProfileSubMenuButton.click()]).then(()=> {
               // browser.actions().mouseMove(BB_menuRepo.Select_Element_MyProfileSubMenuButton).perform();
                success();
            });
        });
    };

    BB_Menu.prototype.Click_LogOutSubmenu = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_LogOutSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            page.executeSequence([BB_menuRepo.Select_Element_LogOutSubMenuButton.click()]).then(()=> {
             //   browser.actions().mouseMove(BB_menuRepo.Select_Element_LogOutSubMenuButton).perform();
                success();
            });
        });
    };

    BB_Menu.prototype.Click_AdminTab = function () {
        //TODO EXPERIMENT FOR BUTTONS FAIL PASS
       // utilities.ExpectedElement_StopAutomationAtFail(BB_menuRepo.Select_Element_AdminTab);
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_AdminTab), protractorConfig.config.WaitTime);
        browser.isElementPresent(BB_menuRepo.Select_Element_AdminTab).then((isPresente)=> {
           // browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_AdminTab), protractorConfig.config.WaitTime);
            return new Promise((success, failure) => {
                if (isPresente) {
                    browser.driver.wait(BB_menuRepo.Select_Element_AdminTab.click()).then(() => {
                       // captureBrowserCapabilities.captureCurrentBrowser('safari', false);
                      //  if (protractorConfig.config.capabilities.browserName.toLowerCase() != 'safari') {
                        //TODO no quitar sirve para EDGE
                        page.executeSequence([browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_AdminTab).perform()]).then(()=>{ success();});
                        //}
                    });
                }
                else
                {
                    console.log("could not find Click_AdminTab");
                }
            });
        });
    };

    BB_Menu.prototype.Click_Users_Submenu = function () {
        //Safari BUG worklaround
        //protractorConfig.config.multiCapabilities.browserName =='Safari'
        //protractorConfig.config.capabilities.browserName == 'safari'
        // if (captureBrowserCapabilities.currentBrowserName.toLowerCase() == 'safari') {
        // if (protractorConfig.config.capabilities.browserName.toLowerCase() == 'safari') {
        //     console.log('safari found');
        //    browser.driver.get('http://qa-autobahn.blackbookcloud.com/user/list');
        // }
        // else {

            return new Promise((success, failure) => {
                page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_UsersSubMenuButton), protractorConfig.config.WaitTime),
                    BB_menuRepo.Select_Element_UsersSubMenuButton.click()]).then(() => {
                    success();
                });
            });
        //}
    };

    BB_Menu.prototype.Click_Roles_Submenu = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_RolesSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            page.executeSequence([BB_menuRepo.Select_Element_RolesSubMenuButton.click()]).then(() => {
                success();
            });
        });
    };
};
module.exports = new BB_Menu();