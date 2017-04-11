/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_userListRepo = require('../Repository/BB_userListRepo.js');
var utilities = require('../Page/Utilities.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractor = require('protractor');
var page = require ('../Page/Page_Objects');

var BB_UserList = function BB_UserList() {

    BB_UserList.prototype.FilterValue = '';

    BB_UserList.prototype.Verify_ButtonNotInPage = function (buttonName) {
        return new Promise((success, failure) => {
            page.verifyElementNotInPage(BB_userListRepo.Select_Element_NewUserButton, 4000, success);
        });
    };

    BB_UserList.prototype.Verify_UsersRole = function (userRole) {
        return new Promise((success, failure) => {
            page.verifyMessageDisplay(BB_userListRepo.Select_Element_CellAdmin, userRole, protractorConfig.config.WaitTime, success, failure);
        });
    };

    BB_UserList.prototype.VerifyGearSubMenuOptions = function () {
        return new Promise((success, failure) => {
            page.executeSequence([BB_userListRepo.Select_Element_Gear_All_Submenu.getText().then(function (arr) {
                var headers = arr.toString().split("\n");

                if (headers[0] == "View") {
                    //console.log("header:|"+headers[0]+"|");
                    if (headers[1] == "Edit") {
                        //  console.log("header:|"+headers[1]+"|");
                        if (headers[2] == "Deactivate") {
                            //    console.log("header:|"+headers[2]+"|");
                            success();
                        }
                    }
                }
                else {
                    failure();
                }
            })]).then(() => {
            });
        });
    };

    BB_UserList.prototype.VerifyButtonsEnableOrDisable = function (ButtonName, isEnableOrDisable) {
        return new Promise((success, failure) => {
            switch (ButtonName.toString().toLowerCase()) {
                case "newuser":
                    utilities.VerifyButtonStatus_isEnableorDisable(BB_userListRepo.Select_Element_NewUserButton, isEnableOrDisable, success, failure);
                    break;

                default:
                    console.log("Button Name selection is not in function.");
                    failure();
            }
        });
    };

    BB_UserList.prototype.Click_NewUser_Button = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_userListRepo.Select_Element_NewUserButton, protractorConfig.config.WaitTime, success );
        });
    };

    BB_UserList.prototype.EnterValueToFilter_FilterUseList = function (stringFilter) {
        return new Promise((success, failure)=> {
            page.executeSequence([this.FilterValue = utilities.ReplaceDoubleQuotesWithWhiteSpace(stringFilter.toString()),
                page.fill(BB_userListRepo.Select_Element_FilterUserListTextbox, this.FilterValue, protractorConfig.config.WaitTime,BB_userListRepo.Select_Element_TittleUserList, success)
            ]).then(()=>{});
        });
    };

    BB_UserList.prototype.Click_StatusFilter = function () {
        return new Promise((success, failure) => {
            page.executeSequence([page.clickElement(BB_userListRepo.Select_Element_StatusFilter, protractorConfig.config.WaitTime),
                page.focus(BB_userListRepo.Select_Element_TittleUserList, success)
            ]).then(() => {
            });
        });
    };

    BB_UserList.prototype.Click_FilterUserListStatus_Submenu = function (PermissionsName) {
        return new Promise ((success, failure)=>{
            page.selectDropdownItemByValue(BB_userListRepo.Select_Element_StatusFilter, PermissionsName, success);
        });
    };

    BB_UserList.prototype.Click_GearIcon = function (numberElementToSelect) {
        var index = parseInt(numberElementToSelect) - 1;

        return new Promise((success, failure)=> {
            page.clickButton(BB_userListRepo.Select_Element_EditGeardIcon.get(index), protractorConfig.config.WaitTime, success);
        });
    };

    BB_UserList.prototype.Click_GearIcon_Inactive = function () {
        return new Promise((success, failure) => {
            page.clickButton(BB_userListRepo.Select_Element_GeardIcon_Inactive, protractorConfig.config.WaitTime, success);
        });
    };

    BB_UserList.prototype.Click_Gear_Deactivate_Submenu = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([page.clickElement( BB_userListRepo.Select_Element_Gear_Deactivate_Submenu, protractorConfig.config.WaitTime),
                page.focus(BB_userListRepo.Select_Element_TittleUserList, success)]).then(()=>{});
        });
    };

    BB_UserList.prototype.Click_Gear_Activate_Submenu = function () {
        return new Promise((success, failure)=> {
            page.executeSequence([page.clickElement( BB_userListRepo.Select_Element_Gear_Activate_Submenu, protractorConfig.config.WaitTime),
                page.focus(BB_userListRepo.Select_Element_TittleUserList, success)]).then(()=>{});
        });
    };

    BB_UserList.prototype.Click_Gear_View_Submenu = function (rowNumber) {
        return new Promise((success, failure) => {
            page.clickButton(BB_userListRepo.Select_Element_Gear_View_Submenu(rowNumber),protractorConfig.config.WaitTime,success);
        });
    };

    BB_UserList.prototype.Click_Gear_Edit_Submenu = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_userListRepo.Select_Element_Gear_Edit_Submenu, protractorConfig.config.WaitTime, success);
        });
    };

    BB_UserList.prototype.Click_Gear_Delete_Submenu = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_userListRepo.Select_Element_Gear_Delete_Submenu, protractorConfig.config.WaitTime, success);
        });
    };
};
module.exports = new BB_UserList();