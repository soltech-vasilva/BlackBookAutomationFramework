/**
 * Created by Vsilva on 1/20/17.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


// var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractorConfigfile = require('../Repository/BB_configuration.js');
var protractorConfig = require (protractorConfigfile.Path_protractorConfig);
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');

var BB_EditRoles = function BB_EditRoles() {

    BB_EditRoles.prototype.RoleName = '';
    BB_EditRoles.prototype.FilterUser = '';
    BB_EditRoles.prototype.FilterPermissions = '';

    BB_EditRoles.prototype.Click_DeleteButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Delete_button, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_EditButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Edit_button, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_ResetButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_editRolesRepo.Select_Element_Reset_button, protractorConfig.config.WaitTime),
                page.focus(BB_editRolesRepo.Select_Element_TittleAddNewRole ,success)]).then(()=>{});
        });
    };

    BB_EditRoles.prototype.Click_SaveButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Save_button,protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_CancelButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Cancel_button, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_ModalWarningMessage_ConfirmOrCancel_Button_RoleEditor = function (buttonName) {
        return new Promise((success, failure) => {
            switch (buttonName.toString().toLowerCase()) {
                case 'cancel':
                    page.clickButton(BB_editRolesRepo.Select_Element_Cancel_button_PopMenu, protractorConfig.config.WaitTime, success);
                    break;

                case 'confirm':
                    browser.wait(browser.getCurrentUrl()).then(function (getCurrentURL) {
                        var currentURL = getCurrentURL.split("://");
                        // console.log('currentURL:'+currentURL[1]);

                        var URL = BB_loginRepo.BlackBookUrl.split("://");

                        if (currentURL[1].trim() === URL[1] + '/role/list') {
                            page.clickButton(BB_editRolesRepo.Select_Element_Confirm_button_RoleList, protractorConfig.config.WaitTime, success);
                        }
                        else {
                            //   console.log('Confirm button on other page CHECK URL BUG');
                            //  console.log('currentURL:'+currentURL[1]);
                            page.clickButton(BB_editRolesRepo.Select_Element_Confirm_button_RoleProfile, protractorConfig.config.WaitTime, success);
                        }
                    });
                    break;
                default:
                    console.log(TextboxName + ' : is not part of switch statement in Verify_UserInformation function.');
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Enter_RoleName_inForm_RoleEditor = function (roleNme) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.RoleName = utilities.ReplaceDoubleQuotesWithWhiteSpace(roleNme.toString()),
                page.fill(BB_editRolesRepo.Select_Element_RoleNameTextbox, this.RoleName, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });
    };

    BB_EditRoles.prototype.Enter_FilterPermissions_RoleEditor = function (filterPermissions) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.FilterPermissions = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterPermissions.toString()),
                page.fill(BB_editRolesRepo.Select_Element_FilterPermissionsTextbox, this.FilterPermissions, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });
    };

    BB_EditRoles.prototype.Enter_FilterUsers_RoleEditor = function (filterUser) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.FilterUser = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterUser.toString()),
                page.fill(BB_editRolesRepo.Select_Element_FilterUsersTextbox, this.FilterUser, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });
    };

    BB_EditRoles.prototype.Click_FilterByStatusName_RoleEditor = function (FilterByStatusName) {
        return new Promise((success, failure) => {
            page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_FilterByStatusDropdown, FilterByStatusName, success, BB_editRolesRepo.Select_Element_TittleAddNewRole);
        });
    };

    BB_EditRoles.prototype.Click_FilterByGroupPermissionsName_RoleEditor = function (PermissionsName) {
        return new Promise((success, failure) => {
            page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_FilterByGroupDropdown, PermissionsName, success, BB_editRolesRepo.Select_Element_TittleAddNewRole);
        });
    };

    BB_EditRoles.prototype.Click_RoleMarketSelection_RoleEditor = function (roleMarketSelection) {
        return new Promise((success, failure) => {
            switch (roleMarketSelection) {
                case "US Used Car":
                    page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_RoleMarketDropdown, '5', success, BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;

                case "Canada Used Car":
                    page.selectDropdownItemByValue(BB_editRolesRepo.Select_Element_RoleMarketDropdown, '6', success, BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;

                default:
                    console.log("Role Market selection is not in function.");
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Click_CircleIconInPermissions_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_CircleIconPermission.get(0), protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_X_CloseMessagePopup_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_AddNamePermissionCheckbox_RoleEditor = function (permissionName) {
        return new Promise((success, failure) => {
            switch (permissionName.toLowerCase()) {
                case "settings":
                        page.clickButton(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox,protractorConfig.config.WaitTime, success );
                    break;

                case "users":
                        page.clickButton(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox, protractorConfig.config.WaitTime,success );
                    break;

                case "roles":
                        page.clickButton(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox, protractorConfig.config.WaitTime,success );
                    break;

                default:
                    console.log('|'+permissionName +'|'+' : is not part of switch statement in Click_AddNamePermissionCheckbox_RoleEditor function.');
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Click_AddRowPermissionCheckbox_RoleEditor = function (permissionRowNumber) {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Permission_AllCheckboxs.get(permissionRowNumber), protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.Click_CheckboxfoundFilterUsers_RoleEditor = function () {
        return new Promise((success, failure) => {
           page.clickButton(BB_editRolesRepo.Select_Element_RolesIsUser_AllCheckbox.get(0), protractorConfig.config.WaitTime, success);
        });
    };

    BB_EditRoles.prototype.DeleteContentInTextBox_RoleEditor = function (TextboxName) {
        return new Promise((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'rolename':
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_RoleNameTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;

                case 'filterpermissions':
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_FilterPermissionsTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;

                case 'filterusers':
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_FilterUsersTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;

                    default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox_RoleEditor function role editor.');
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Verify_FilterByStatusName_RoleEditor = function (FilterByStatusName) {
        return new Promise((success, failure) => {
            page.VerifyDropdownAttributeValue(BB_editRolesRepo.Select_Element_FilterByStatusDropdown, FilterByStatusName, success, failure).then(() => {
            });
        });
    };

    BB_EditRoles.prototype.Verify_ConfirmRoleDeletionMessage_popup_RoleEditor = function (errorMessage) {
        return new Promise((success, failure) => {
            page.verifyMessageDisplay(BB_editRolesRepo.Select_Element_ConfirmPopupMessage_Popup_RoleList, errorMessage, protractorConfig.config.WaitTime, success, failure);
        });
    };

    BB_EditRoles.prototype.Verify_FilterByGroupPermissionsName_RoleEditor = function (PermissionsName) {
        return new Promise((success, failure) => {
            page.VerifyDropdownAttributeValue(BB_editRolesRepo.Select_Element_FilterByGroupDropdown, PermissionsName, success, failure).then(() => {
            });
        });
    };

    BB_EditRoles.prototype.Verify_ButtonsEnableOrDisable_RoleEditor = function (ButtonName, isEnableOrDisable) {
        return new Promise((success, failure) => {
            switch (ButtonName.toString().toLowerCase()) {
                case "save":
                    utilities.VerifyButtonStatus_isEnableorDisable(BB_editRolesRepo.Select_Element_Save_button, isEnableOrDisable, success, failure);
                    break;

                case "delete":
                    utilities.VerifyButtonStatus_isEnableorDisable(BB_editRolesRepo.Select_Element_Delete_button, isEnableOrDisable, success, failure);
                    break;

                default:
                    console.log("Button Name selection is not in function.");
                    failure();
            }
        });
    };

    BB_EditRoles.prototype.Verify_RolePermissions_CheckedOrUnchecked_RoleEditor = function(permissionName, isCheckedorUnchecked){
        return new Promise((success, failure)=> {

            var checkbox = "";

            switch (permissionName.toString().toLowerCase()) {
                case "users":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(5)]).then(()=>{});
                    break;

                case "settings":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(3)]).then(()=>{});
                    break;

                case "roles":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(1)]).then(()=>{});
                    break;

                default:
                    console.log('|'+permissionName +'|'+' : is not part of switch statement in Verify_RolePermissions_CheckedOrUnchecked_RoleEditor function.');
                    return failure();
            }

            checkbox.getAttribute('class').then((currentClass)=>{

                if (currentClass === BB_editRolesRepo.AttributeString_Permission_GridCheckbox_Checked && isCheckedorUnchecked.toString().toLowerCase() == "checked") {
                    return success();
                }
                else  if (currentClass === BB_editRolesRepo.AttributeString_Permission_GridCheckbox_Unchecked && isCheckedorUnchecked.toString().toLowerCase() == "unchecked") {
                    return success();
                }
                else
                {
                    console.log('FAIL for checkbox:|' + currentClass +'|');
                    return failure();
                }
            });
        });
    };

    BB_EditRoles.prototype.Verify_RoleMarketValue_Dropdownbox_RoleEditor = function (roleMarketSelection) {
        return new Promise((success, failure) => {
            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_RoleMarketDropdown, protractorConfig.config.WaitTime),
                browser.wait(BB_editRolesRepo.Select_Element_RoleMarketDropdown.getAttribute('value').then((value) => {
                        element(by.css('option[value="' + value + '"]')).getText().then((text) => {
                            if (roleMarketSelection === text) {
                                success();
                            }
                            else {
                                failure();
                            }
                        });
                    })
                )]).then(()=>{});
        });
    };
};
module.exports = new BB_EditRoles();
