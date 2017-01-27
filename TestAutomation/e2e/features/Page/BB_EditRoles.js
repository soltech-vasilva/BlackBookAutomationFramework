/**
 * Created by Vsilva on 1/20/17.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');

var BB_EditRoles = function BB_EditRoles() {

    BB_EditRoles.prototype.Click_SaveButton_RoleEditor = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Save_button), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Save_button.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_CancelButton_RoleEditor = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Cancel_button), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Cancel_button.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_X_CloseMessagePopup = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_X_button_MessagePopup), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_X_button_MessagePopup.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_PermissionCheckbox_Setting = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox.click().then(() => {
                success();
            });
        });
    };
};
module.exports = new BB_EditRoles();
