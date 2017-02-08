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
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Save_button), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Save_button.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_CancelButton_RoleEditor = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Cancel_button), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Cancel_button.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_X_CloseMessagePopup_RoleEditor = function () {
        browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_X_button_MessagePopup), protractorConfig.config.WaitTime);
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_X_button_MessagePopup.click().then(() => {
                success();
            });
        });
    };

    BB_EditRoles.prototype.Click_AddNamePermissionCheckbox_RoleEditor = function (permissionName) {
        return new Promise((success, failure) => {
            switch (permissionName.toLowerCase()) {
                case "setting":
                    browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox), protractorConfig.config.WaitTime);
                    return new Promise((success, failure) => {
                        BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox.click().then(() => {
                            success();
                        });
                    });
                    break;
                case "users":
                    browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox), protractorConfig.config.WaitTime);
                    return new Promise((success, failure) => {
                        BB_editRolesRepo.Select_Element_Permission_Users_Checkbox.click().then(() => {
                            success();
                        });
                    });
                    break;
                case "roles":
                    browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox), protractorConfig.config.WaitTime);
                    return new Promise((success, failure) => {
                        BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox.click().then(() => {
                            success();
                        });
                    });
                    break;
                default:
                    console.log(permissionName + ' : is not part of switch statement in Click_AddNamePermissionCheckbox_RoleEditor function.');
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Click_AddRowPermissionCheckbox_RoleEditor = function (permissionRowNumber) {
        return new Promise((success, failure) => {
            BB_editRolesRepo.Select_Element_Permission_AllCheckboxs.get(permissionRowNumber).click().then(()=> {success();});
        });
    };
};
module.exports = new BB_EditRoles();
