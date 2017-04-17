/**
 * Created by Vsilva on 12/15/16.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_addUserProfileRepo  = require('../Repository/BB_AddUserProfileRepo.js');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_login = require('../Page/BB_Login.js');
var BB_loginRepo = require ('../Repository/BB_LoginRepo.js');
var utilities = require('../Page/Utilities.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_editRoles = require('../Page/BB_EditRoles.js');
var page = require ('../Page/Page_Objects');
var BB_editSegments = require('../Page/BB_EditSegments.js');

var VerifyErrorMessage = function VerifyErrorMessage(){

    VerifyErrorMessage.prototype.ExpectTextEqualsTo = function(elementToCheck, compareValuesString, success, failure){
        return page.executeSequence([elementToCheck.getText().then((Text)=>{
            if (Text.trim() == compareValuesString) {
                success();
            }
            else {
                console.log('Text: |'+Text+'| is not equal to compareValuesString: |'+ compareValuesString+'|');
                failure();
            }
        })]);
        //this kill script and dont fail gracely and report are blank "DONT USE EXPECT
        // expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
    };

    VerifyErrorMessage.prototype.AssertElementsToDisplay = function (isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay , success, failure ) {

        if (isElementPresent == true) {
            return  page.executeSequence([VerifyErrorMessage.prototype.ExpectTextEqualsTo(elementToCheck, compareValuesString, success, failure)]).then(()=>{});
        }
        else {
            console.log(consoleErrorMessageDisplay);
            failure();
        }
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessageToDisplay_RoleEditor = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {
        return new Promise ((success, failure)=> {
            switch (str_TextboxName.toLowerCase()) {
                case 'rolename':
                    if ((BB_editRoles.RoleName != '' && FilledOrEmptyField == 'filled') || (BB_editRoles.RoleName == '' && FilledOrEmptyField == 'empty')) {

                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleName_Require);
                            browser.isElementPresent(BB_editRolesRepo.Select_xpath_ERRORMESSAGE_RoleName_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleName_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters);
                            browser.isElementPresent(BB_editRolesRepo.Select_xpath_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                            });
                        }
                    }
                    break;

                case 'rolemarket':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleMarket_Require);
                    browser.isElementPresent(BB_editRolesRepo.Select_xpath_ERRORMESSAGE_RoleMarket_Require).then(function (isPresente) {
                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleMarket_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                    });
                    break;

                default:
                    console.log(str_TextboxName + ' : is not part of switch statement in Verify_ErrorMessageToDisplay_RoleEditor function.');
                    failure();
            }
        });
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessageToDisplay_UserProfile = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {

        return new Promise((success, failure) => {
            var URL = BB_loginRepo.BlackBookUrl + '/user';
            URL = URL.toString().split("://");

            switch (str_TextboxName.toLowerCase()) {
                case 'firstname':
                    if ((BB_editUserProfile.firstName != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.firstName == '' && FilledOrEmptyField == 'empty')) {
                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName_Require);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_FirstName_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                            });
                        }
                    }
                    break;

                case 'lastname':
                    if ((BB_editUserProfile.lastName != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.lastName == '' && FilledOrEmptyField == 'empty')) {
                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName_Require);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_LastName_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                            });
                        }
                    }
                    break;

                case 'emailaddress':
                    if ((BB_editUserProfile.emailAddress != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.emailAddress == '' && FilledOrEmptyField == 'empty')) {
                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email_Require);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_Email_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email_InvalidEmailAddress);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_Email_InvalidEmailAddress).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email_InvalidEmailAddress, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address', success, failure);
                            });
                        }
                    }
                    break;

                case 'phonenumber':
                    if ((BB_editUserProfile.phoneNumber != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber);
                        browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number', success, failure);
                        });
                    }
                    break;

                case 'newpassword':
                    if ((BB_editUserProfile.newPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.newPassword == '' && FilledOrEmptyField == 'empty')) {
                        browser.getCurrentUrl().then(function (getCurrentURL) {

                            var currentURL = getCurrentURL.split("://");

                            if (str_VerifyErrorName == 'Required') {
                                if (currentURL[1].trim() == URL[1]) {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Require);
                                    browser.isElementPresent(BB_addUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Require).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Require);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Require).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                            }
                            else {
                                if (currentURL[1].trim() == URL[1]) {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character);
                                    browser.isElementPresent(BB_addUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                                    });
                                }
                            }
                        });
                    }
                    break;

                case 'confirmnewpassword':
                    if ((BB_editUserProfile.confirmNewPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.confirmNewPassword == '' && FilledOrEmptyField == 'empty')) {

                        browser.getCurrentUrl().then(function (getCurrentURL) {

                            var currentURL = getCurrentURL.split("://");

                            if (currentURL[1].trim() == URL[1]) {
                                if (str_VerifyErrorName == 'Required') {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Required);
                                    browser.isElementPresent(BB_addUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Required).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Required, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch);
                                    browser.isElementPresent(BB_addUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_addUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                            }
                            else {
                                if (str_VerifyErrorName == 'Required') {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Require).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                                else {
                                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch);
                                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then(function (isPresente) {
                                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                                    });
                                }
                            }
                        });
                    }
                    break;

                case 'currentemailaddress' :
                    if ((BB_login.currentEmailAddress != '' && FilledOrEmptyField == 'filled') || (BB_login.currentEmailAddress == '' && FilledOrEmptyField == 'empty')) {
                        page.executeSequence([utilities.ExpectedElement_StopAutomationAtFail(BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword),
                            browser.driver.sleep(2000),
                            browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Email Address', success, failure);
                            })]).then(() => {
                        });
                    }
                    break;

                case 'currentpassword' :
                    if ((BB_login.currentPassword != '' && FilledOrEmptyField == 'filled') || (BB_login.currentPassword == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword);
                        browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Password', success, failure);
                        });
                    }

                    break;

                case 'previouspassword' :
                    if ((BB_editUserProfile.previousPassword != '' && FilledOrEmptyField == 'filled') || (BB_editUserProfile.previousPassword == '' && FilledOrEmptyField == 'empty')) {
                        if (str_VerifyErrorName == 'Required') {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Require).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Previous Password', success, failure);
                            });
                        }
                        else {
                            utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character);
                            browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Leastbe8Character).then(function (isPresente) {
                                VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Previous Password', success, failure);
                            });
                        }
                    }
                    break;

                case 'userrole' :
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_UserRole);
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_UserRole).then(function (isPresente) {
                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_UserRole, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in User is Roles', success, failure);
                    });

                    break;

                case 'segmentname' :
                   // console.log("before BB_editSegments.SegmentName:|"+BB_editSegments.SegmentName+'|');
                    if ((BB_editSegments.SegmentName != '' && FilledOrEmptyField == 'filled') || (BB_editSegments.SegmentName == '' && FilledOrEmptyField == 'empty')) {
                        utilities.ExpectedElement_StopAutomationAtFail(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/span')));
                        browser.isElementPresent(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/span'))).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/span')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Segment Name', success, failure);
                        });
                    }
                    else {
                      //  console.log("in else BB_editSegments.SegmentName:|"+BB_editSegments.SegmentName+'|');
                        utilities.ExpectedElement_StopAutomationAtFail(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/error-msg/span')));
                        browser.isElementPresent(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/error-msg/span'))).then(function (isPresente) {
                            VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/error-msg/span')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Segment Name', success, failure);
                        });
                    }
                    break;

                case 'queryname' :
                    utilities.ExpectedElement_StopAutomationAtFail(element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/div[2]/div/div[1]/div/span')));
                    browser.isElementPresent(element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/div[2]/div/div[1]/div/span'))).then(function (isPresente) {
                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/div[2]/div/div[1]/div/span')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Segment Name', success, failure);
                    });

                    break;

                case 'queryfilter' :

                    utilities.ExpectedElement_StopAutomationAtFail(element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/segment-filter/div/div/ul/li[1]')));
                    browser.isElementPresent(element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/segment-filter/div/div/ul/li[1]'))).then(function (isPresente) {
                        VerifyErrorMessage.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/segment-view/div/div/div/segment-filter/div/div/ul/li[1]')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Segment Name', success, failure);
                    });

                    break;

                default:
                    console.log(str_TextboxName + ' : is not part of switch statement in Verify_ErrorMessageToDisplay_UserProfile function.');
                    failure();
            }
        });
    };

    VerifyErrorMessage.prototype.AssertElementsNotToDisplay = function (isElementPresent, elementToCheck, consoleErrorMessageDisplay, success, failure )
    {
        if (isElementPresent == true) {
            return browser.driver.wait(elementToCheck.getText().then((Text)=> {

                if (Text.trim() != "") {
                    console.log('ERROR: |' + Text + '|. ' + consoleErrorMessageDisplay);
                    //process.exit(1);
                    failure();
                }
                else {
                    //when element is present but it is empty string
                    console.log('pass: empty string');
                    success();
                }
            }));
        }
        else {
             success();
        }
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessagesNotToDisplay_RoleEditor = function (TextboxName) {
        browser.driver.sleep(2000);
        return new Promise((success, failure) => {
            switch (TextboxName.toLowerCase()) {
                case 'rolename':
                    browser.isElementPresent(BB_editRolesRepo.Select_xpath_ERRORMESSAGE_RoleName_Require).then((isPresente) => {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleName_Require, 'It should not show any errors in Role Name', success, failure);
                    });
                    break;

                case 'rolemarket':
                    browser.isElementPresent(BB_editRolesRepo.Select_xpath_ERRORMESSAGE_RoleMarket_Require).then((isPresente) => {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editRolesRepo.Select_Element_ERRORMESSAGE_RoleMarket_Require, 'It should not show any errors in Role Market', success, failure);
                    });
                    break;

                default:
                    console.log(TextboxName + ' : is not part of switch statement in Verify_ErrorMessagesNotToDisplay_RoleEditor function.');
                    failure();
            }
        });
    };

    VerifyErrorMessage.prototype.Verify_ErrorMessagesNotToDisplay_UserProfile = function (TextboxName) {
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_FirstName_Require).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_FirstName_Require, 'It should not show any errors in First Name', success, failure);
                    });
                    break;

                case 'lastname':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ERRORMESSAGE_LastName_Require).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_LastName_Require, 'It should not show any errors in Last Name', success, failure);
                    });
                    break;

                case 'emailaddress':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_Email_Require).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_Email_Require, 'It should not show any errors in Email Address', success, failure);
                    });
                    break;

                case 'phonenumber':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number', success, failure);
                    });
                    break;

                case 'newpassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character, 'It should not show any errors in New Password', success, failure);
                    });
                    break;

                case 'confirmnewpassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch, 'It should not show any errors in Confirm New Password', success, failure);
                    });
                    break;

                case 'currentemailaddress':
                    browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword , 'It should not show any errors in Current Email Address', success, failure);
                    });
                    break;

                case 'currentpassword':
                    browser.isElementPresent(BB_loginRepo.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_loginRepo.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword , 'It should not show any errors in Current Password', success, failure);
                    });
                    break;
                case 'previouspassword':
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_PreviousPassword_Require).then((isPresente)=> {
                       VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_PreviousPassword_Require , 'It should not show any errors in Previous Password', success, failure);
                    });
                    break;

                case 'userrole' :
                    browser.isElementPresent(BB_editUserProfileRepo.Select_xpath_ERRORMESSAGE_UserRole).then((isPresente)=> {
                        VerifyErrorMessage.prototype.AssertElementsNotToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ERRORMESSAGE_UserRole , 'It should not show any errors in User is Roles', success, failure);
                    });
                    break;

                default:
                    console.log(TextboxName+' : is not part of switch statement in Verify_ErrorMessagesNotToDisplay_UserProfile function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyErrorMessage();