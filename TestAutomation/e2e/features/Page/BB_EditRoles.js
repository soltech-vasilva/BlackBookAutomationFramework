/**
 * Created by Vsilva on 1/20/17.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');

var BB_EditRoles = function BB_EditRoles() {

    BB_EditRoles.prototype.RoleName = '';
    BB_EditRoles.prototype.FilterUser = '';
    BB_EditRoles.prototype.FilterPermissions = '';

    BB_EditRoles.prototype.Enter_RoleName_inForm = function (roleNme) {

        return new Promise((success, failure)=> {
            page.executeSequence([this.RoleName = utilities.ReplaceDoubleQuotesWithWhiteSpace(roleNme.toString()),
                page.fill(BB_editRolesRepo.Select_Element_RoleNameTextbox, this.RoleName, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });

        // return new Promise((success, failure)=> {
        //     page.executeSequence([
        //         this.RoleName = utilities.ReplaceDoubleQuotesWithWhiteSpace(roleNme.toString()),
        //         browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_RoleNameTextbox), protractorConfig.config.WaitTime),
        //         BB_editRolesRepo.Select_Element_RoleNameTextbox.click().then(() => {
        //             if (this.RoleName != '') {
        //                 BB_editRolesRepo.Select_Element_RoleNameTextbox.sendKeys(this.RoleName);
        //                 page.executeSequence([utilities.VerifyValueEntered_RetypeValue(BB_editRolesRepo.Select_Element_RoleNameTextbox, this.RoleName)]).then(() => {
        //                 });
        //             }
        //         })
        //     ]).then(() => {
        //         BB_editUserProfile.Click_TittleofPage(BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
        //     });
        // });


        // this.RoleName =   utilities.ReplaceDoubleQuotesWithWhiteSpace(roleNme.toString());
        //
        // browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_editRolesRepo.Select_Element_RoleNameTextbox), protractorConfig.config.WaitTime);
        // BB_editRolesRepo.Select_Element_RoleNameTextbox.click();
        //
        // return new Promise((success, failure)=> {
        //     if (this.RoleName != '') {
        //         BB_editRolesRepo.Select_Element_RoleNameTextbox.sendKeys(this.RoleName);
        //         page.executeSequence([utilities.VerifyValueEntered_RetypeValue( BB_editRolesRepo.Select_Element_RoleNameTextbox, this.RoleName)]).then(()=>{});
        //     }
        //
        //     BB_editUserProfile.Click_TittleofPage(BB_editRolesRepo.Select_Element_TittleAddNewRole ,success);
        // });
    };

    BB_EditRoles.prototype.Click_ResetButton_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_editRolesRepo.Select_Element_Reset_button, protractorConfig.config.WaitTime),
                page.focus(BB_editRolesRepo.Select_Element_TittleAddNewRole ,success)]).then(()=>{});
            // page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( element(by.css('button.button.yellow-btn'))), protractorConfig.config.WaitTime),
            //     element(by.css('button.button.yellow-btn')).click()
            // ]).then(() => {
            //     success();
            // });
        });
    };

    BB_EditRoles.prototype.Click_SaveButton_RoleEditor = function () {

        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Save_button,protractorConfig.config.WaitTime, success);
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Save_button), protractorConfig.config.WaitTime);
        // return new Promise((success, failure) => {
        //     BB_editRolesRepo.Select_Element_Save_button.click().then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Click_CancelButton_RoleEditor = function () {

        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_Cancel_button, protractorConfig.config.WaitTime, success);
        });

        // return new Promise((success, failure) => {
        //     page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf( BB_editRolesRepo.Select_Element_Cancel_button), protractorConfig.config.WaitTime),
        //         BB_editRolesRepo.Select_Element_Cancel_button.click()
        //     ]).then(() => {
        //         success();
        //     });
        // });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Cancel_button), protractorConfig.config.WaitTime);
        // return new Promise((success, failure) => {
        //     BB_editRolesRepo.Select_Element_Cancel_button.click().then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Click_X_CloseMessagePopup_RoleEditor = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, protractorConfig.config.WaitTime, success);
        });
        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_X_button_MessagePopup), protractorConfig.config.WaitTime);
        // return new Promise((success, failure) => {
        //     BB_editRolesRepo.Select_Element_X_button_MessagePopup.click().then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Click_AddNamePermissionCheckbox_RoleEditor = function (permissionName) {
        return new Promise((success, failure) => {
            switch (permissionName.toLowerCase()) {
                case "settings":
                        page.clickButton(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox,protractorConfig.config.WaitTime, success );
                        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox), protractorConfig.config.WaitTime);
                        // BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox.click().then(() => {
                        //   success();
                        // });

                    break;
                case "users":
                    page.clickButton(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox, protractorConfig.config.WaitTime,success );

                    // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox), protractorConfig.config.WaitTime);
                    //     BB_editRolesRepo.Select_Element_Permission_Users_Checkbox.click().then(() => {
                    //         success();
                    //     });

                    break;
                case "roles":
                    page.clickButton(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox, protractorConfig.config.WaitTime,success );

                    // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox), protractorConfig.config.WaitTime);
                    //     BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox.click().then(() => {
                    //         success();
                    //     });

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
            // page.executeSequence([ browser.driver.sleep(2000), BB_editRolesRepo.Select_Element_Permission_AllCheckboxs.get(permissionRowNumber).click()]).then(()=> {
            //     success();
            // });
        });

        //return new Promise((success, failure) => {
        //     page.executeSequence([ browser.driver.sleep(2000), BB_editRolesRepo.Select_Element_Permission_AllCheckboxs.get(permissionRowNumber).click()]).then(()=> {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Enter_FilterPermissions_RoleEditor = function (filterPermissions) {

        return new Promise((success, failure)=> {
            page.executeSequence([this.FilterPermissions = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterPermissions.toString()),
                page.fill(BB_editRolesRepo.Select_Element_FilterPermissionsTextbox, this.FilterPermissions, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });

        // return new Promise((success, failure) => {
        //     page.executeSequence([browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_FilterPermissionsTextbox), protractorConfig.config.WaitTime),
        //     BB_editRolesRepo.Select_Element_FilterPermissionsTextbox.sendKeys(filterPermissions)]).then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Enter_FilterUsers_RoleEditor = function (filterUser) {

        return new Promise((success, failure)=> {
            page.executeSequence([this.FilterUser = utilities.ReplaceDoubleQuotesWithWhiteSpace(filterUser.toString()),
                page.fill(BB_editRolesRepo.Select_Element_FilterUsersTextbox, this.FilterUser, protractorConfig.config.WaitTime,BB_editRolesRepo.Select_Element_TittleAddNewRole, success)
            ]).then(()=>{});
        });

        // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_FilterUsersTextbox), protractorConfig.config.WaitTime);
        // return new Promise((success, failure) => {
        //     BB_editRolesRepo.Select_Element_FilterUsersTextbox.sendKeys(filterUser).then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Verify_RolePermissions_CheckedorUnchecked_RoleEditor = function(permissionName, isCheckedorUnchecked){
        return new Promise((success, failure)=> {

            var checkbox = "";

            switch (permissionName.toString().toLowerCase()) {
                case "users":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(5)]).then(()=>{});
                    // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Users_Checkbox), 10000);
                    // checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(5);
                    break;

                case "settings":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(3)]).then(()=>{});

                    // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Settings_Checkbox), 10000);
                    // checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(3);
                    break;

                case "roles":
                    page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox, protractorConfig.config.WaitTime),
                        checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(1)]).then(()=>{});

                    // browser.driver.wait(protractor.ExpectedConditions.presenceOf(BB_editRolesRepo.Select_Element_Permission_Roles_Checkbox), 10000);
                    // checkbox = BB_editRolesRepo.Select_Element_Permission_GridCheckbox.get(1);
                    break;

                default:
                    console.log('|'+permissionName +'|'+' : is not part of switch statement in Verify_RolePermissions_CheckedorUnchecked_RoleEditor function.');
                    return failure();
            }

            checkbox.getAttribute('class').then((currentClass)=>{

                if (currentClass == BB_editRolesRepo.AttributeString_Permission_GridCheckbox_Checked && isCheckedorUnchecked.toString().toLowerCase() == "checked") {
                   // console.log('|style:|' + currentClass);
                    return success();
                }
                else  if (currentClass == BB_editRolesRepo.AttributeString_Permission_GridCheckbox_Unchecked && isCheckedorUnchecked.toString().toLowerCase() == "unchecked") {
                   // console.log('|style:|' + currentClass);
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

    BB_EditRoles.prototype.Click_CheckboxfoundFilterUsers_RoleEditor = function () {
        return new Promise((success, failure) => {
           page.clickButton(BB_editRolesRepo.Select_Element_RolesIsUser_AllCheckbox.get(0), protractorConfig.config.WaitTime, success);
        });

        // return new Promise((success, failure) => {
        //     //need buffer to sort and click first box wanted
        //     browser.driver.sleep(2000);
        //     BB_editRolesRepo.Select_Element_RolesIsUser_AllCheckbox.get(0).click().then(() => {
        //         success();
        //     });
        // });
    };

    BB_EditRoles.prototype.Verify_RoleMarketValue_Dropdownbox_RoleEditor = function (roleMarketSelection) {


        return new Promise((success, failure) => {
            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_RoleMarketDropdown, protractorConfig.config.WaitTime),
                browser.driver.wait(BB_editRolesRepo.Select_Element_RoleMarketDropdown.getAttribute('value').then((value) => {
                   // console.log('value:' + value);
                    element(by.css('option[value="' + value + '"]')).getText().then((text) => {
                     //   console.log('text:' + text);
                        if (roleMarketSelection == text) {
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

    BB_EditRoles.prototype.DeleteContentInTextBox = function (TextboxName) {
        return new Promise((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'rolename':
                    //console.log('rolename');
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_RoleNameTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;
                case 'filterpermissions':
                    //console.log('filterpermissions');
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_FilterPermissionsTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;
                case 'filterusers':
                    //console.log('filterusers');
                    BB_editUserProfile.Click_Delete_Content(success, BB_editRolesRepo.Select_Element_FilterUsersTextbox,BB_editRolesRepo.Select_Element_TittleAddNewRole);
                    break;
                default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox function role editor.');
                    failure();
            }
        });
    };
};
module.exports = new BB_EditRoles();
