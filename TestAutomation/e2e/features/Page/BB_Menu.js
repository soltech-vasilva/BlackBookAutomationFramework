var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_menuRepo = require('../Repository/BB_MenuRepo.js');
var utilities = require('../Page/Utilities.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var BB_Menu = function BB_Menu() {

    BB_Menu.prototype.Click_AvatarImageButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_ProfileButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_ProfileButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_MyProfileSubmenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_MyProfileSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_MyProfileSubMenuButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_LogOutSubmenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_LogOutSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_LogOutSubMenuButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_AdminTab = function () {
        //TODO EXPERIMENT FOR BUTTONS FAIL PASS
        utilities.ExpectedElement_StopAutomationAtFail(BB_menuRepo.Select_Element_AdminTab);
        browser.isElementPresent(BB_menuRepo.Select_Element_AdminTab).then((isPresente)=> {
            //browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_AdminTab), protractorConfig.config.WaitTime);
            return new Promise((success, failure) => {
                if (isPresente) {

                    BB_menuRepo.Select_Element_AdminTab.click().then(() => {
                        success();
                    });
                }
                else
                {
                    console.log("could not find Click_AdminTab");
                    failure();
                }
            });
        });
    };

    BB_Menu.prototype.Click_Users_Submenu = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_UsersSubMenuButton), protractorConfig.config.WaitTime);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_UsersSubMenuButton.click().then(()=> {
                success();
            });
        });
    };
};
module.exports = new BB_Menu();