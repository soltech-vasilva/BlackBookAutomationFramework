var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_menuRepo = require('../Repository/BB_MenuRepo.js');

var BB_Menu = function BB_Menu() {

    BB_Menu.prototype.Click_ProfileButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_ProfileButton), 10000);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_ProfileButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_MyProfileButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_MyProfileSubMenuButton), 10000);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_MyProfileSubMenuButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_LogOutButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_LogOutSubMenuButton), 10000);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_LogOutSubMenuButton.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_AdminTab = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_AdminTab), 10000);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_AdminTab.click().then(()=> {
                success();
            });
        });
    };

    BB_Menu.prototype.Click_UsersButton = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_menuRepo.Select_Element_UsersSubMenuButton), 10000);
        return new Promise((success, failure)=> {
            BB_menuRepo.Select_Element_UsersSubMenuButton.click().then(()=> {
                success();
            });
        });
    };
};
module.exports = new BB_Menu();