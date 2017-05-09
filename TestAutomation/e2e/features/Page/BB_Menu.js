var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_menuRepo = require('../Repository/BB_MenuRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var page = require ('../Page/Page_Objects');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_roleListRepo = require('../Repository/BB_RoleListRepo.js');
var robot = require("robotjs");
var Robot = require("robot-server");
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var jQueryM = require("jquery");

var proQuery = require('proquery');

var BB_Menu = function BB_Menu() {

    BB_Menu.prototype.Click_HomeTab = function () {
        return new Promise((success, failure) => {
            page.executeSequence([
                page.clickElement(BB_menuRepo.Select_Element_HomeTab, protractorConfig.config.WaitTime),
                browser.getProcessedConfig().then((config) => {
                    if (config.capabilities.browserName != 'firefox') {
                        browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_HomeTab).perform().then(() => {
                            success();
                        });
                    }
                    else {

                        var x;
                        var y;

                        BB_menuRepo.Select_Element_HomeTab.getLocation().then((location) => {
                            console.dir(location);
                            x = location.x;
                            console.log('location X:' + x);
                            y = location.y;
                            console.log('location Y:' + y);

                            robot.moveMouse(location.x + 10, location.y + 130);
                            success();
                        });
                    }
                })
            ]).then(() => {
            });
        });
    };

    BB_Menu.prototype.Click_AdminTab = function () {

        // page.executeSequence([browser.isElementPresent(BB_menuRepo.Select_Element_AdminTab).then((isPresente)=> {
        //    console.log('isPresente:'+isPresente);
        //      })]).then(()=>{});

        //          var x ;
        //          var y ;
        //
        //         BB_menuRepo.Select_Element_AdminTab.getLocation().then((location)=>{
        //             console.dir(location);
        //              x = location.x;
        //              console.log('location X:'+x);
        //              y = location.y;
        //              console.log('location Y:'+y);
        //
        //             robot.moveMouse(location.x+10, location.y + 130 );
        //
        //         });
        //         var h;
        //         var w;
        //
        //         BB_menuRepo.Select_Element_AdminTab.getSize().then((Size)=>{
        //              console.dir(Size);
        //          h = Size.height;
        //             console.log('height h:'+h);
        //          w = Size.width;
        //             console.log('width w:'+w);
        //         });
                //works chrome jQuery commands clicks Admin tab
                // $("#page-box > header > ul > li:nth-child(2) > span").click();
                //or
        //           // $("#page-box > header > ul > li:nth-child(2) > span").click(function(){
        //           //  });
        //or
        //    var admin = $("#page-box > header > ul > li:nth-child(2) > span");
        //     admin.click();

        //Documentacion en Javascript
        // browser.executeScript('return document.querySelector("#page-box > header > ul > li:nth-child(2) > span");').then((Ele)=> {
        //     Ele.getText().then(function (text) {
        //         console.log(text);
        //     });
        // });
//
// //or

        // BB_menuRepo.Select_Element_AdminTab.getText().then(function(text){
//         //     console.log(text);
//         // });

        //browser.get("http://www.google.com/?hl=en");
        //browser.sleep(5000);
        //
        // // interact with the page
        // $(":text[name='q']").val("selenium"); // the keys are actually typed!
        // $(":button[name=btnK]").click(); // simulates a real user click (not just the JS event)

        // $("#page-box > dashboard > div > div > div > div.main-content-subhead > div > segment-typeahead > div > input").click().then(()=> {
        //     var keyDownEvent = jQueryM.click();
        //     // if (keyDownEvent.which) {
        //     //     keyDownEvent.which = 97;
        //     // } else {
        //     //     keyDownEvent.keyCode = 97;
        //     // }
        //     $("#page-box > header > ul > li:nth-child(2) > span").trigger(keyDownEvent);
        //     console.log("HIHI");
        // });

        // var admin = element(by.xpath('//*[@id="page-box"]/dashboard/div/div/div/div[1]/div/segment-typeahead/div/input'));
        //
        // proQuery ($('#page-box > header > ul > li:nth-child(2) > span', true).getTagName()).then(function (val) {
        //     console.log(val);
        // });
        //
        //
        //  $("#page-box > header > ul > li:nth-child(2) > span").getText().then(function (val) {
        //     console.log(val);
        // });
       //     admin.click();

        // browser.executeScript('arguments[0].click()', browser.element(by.xpath('//*[@id="page-box"]/dashboard/div/div/div/div[1]/div/segment-typeahead/div/input')));
        //browser.executeScript('$("#page-box > header > ul > li:nth-child(2) > span").scrollTop(1000);');

        return new Promise((success, failure) => {
            page.executeSequence([page.waitForElementTobePresent(BB_menuRepo.Select_Element_AdminTab, protractorConfig.config.WaitTime),
                browser.getProcessedConfig().then((config) => {
                    if (config.capabilities.browserName != 'firefox' || config.capabilities.browserName != 'Chrome') {
                        console.log("click");
                        browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_AdminTab).perform().then(() => {
                            success();
                        });
                    }
                    else {
                        var x;
                        var y;

                        BB_menuRepo.Select_Element_AdminTab.getLocation().then((location) => {
                            console.dir(location);
                            x = location.x;
                            console.log('location X:' + x);
                            y = location.y;
                            console.log('location Y:' + y);

                            robot.moveMouse(location.x + 10, location.y + 130);
                            success();
                        });
                    }
                }),
                page.clickElement(BB_menuRepo.Select_Element_AdminTab, protractorConfig.config.WaitTime)
            ]).then(() => {
            });
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
            page.clickButton(BB_menuRepo.Select_Element_UsersSubMenuButton, protractorConfig.config.WaitTime, success);
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
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_menuRepo.Select_Element_ProfileButton, protractorConfig.config.WaitTime),
                browser.driver.sleep(1000),
                browser.getProcessedConfig().then((config) => {
                    if (config.capabilities.browserName != 'firefox') {
                        browser.driver.actions().mouseMove(BB_menuRepo.Select_Element_ProfileButton).perform().then(() => {
                            success();
                        });
                    }
                    else {

                        var x;
                        var y;

                        BB_menuRepo.Select_Element_ProfileButton.getLocation().then((location) => {
                            console.dir(location);
                            x = location.x;
                            console.log('location X:' + x);
                            y = location.y;
                            console.log('location Y:' + y);

                            robot.moveMouse(location.x + 10, location.y + 130);
                            success();
                        });
                    }})
            ]).then(() => {
            });
        });
    };

    BB_Menu.prototype.Click_MyProfileSubmenu = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_menuRepo.Select_Element_MyProfileSubMenuButton, protractorConfig.config.WaitTime),
                page.focus(BB_editUserProfileRepo.Select_Element_TittleAddNewUserProfileText, success)]).then(() => {
            });
        });
    };

    BB_Menu.prototype.Click_LogOutSubmenu = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_menuRepo.Select_Element_LogOutSubMenuButton, protractorConfig.config.WaitTime, success);
        });
    };

    BB_Menu.prototype.Verify_ButtonNotInPage_Menu = function (buttonName) {
        switch (buttonName.toLowerCase()) {
            case 'admintab':
                return new Promise((success, failure) => {
                    page.verifyElementNotInPage(BB_menuRepo.Select_Element_AdminTab, 4000, success);
                });
                break;
            case 'settingssubmenu':
                return new Promise((success, failure) => {
                    page.verifyElementNotInPage(BB_menuRepo.Select_Element_SettingsSubMenuButton, 4000, success);
                });
                break;
            default:
                console.log(PopUpPageName+' : is not part of switch statement in Verify_UserInformation function.');
                failure();
        }
    };
};
module.exports = new BB_Menu();

