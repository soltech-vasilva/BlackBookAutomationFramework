/**
 * Created by Vsilva on 12/15/16.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var BB_userProfileEdit = require('../Page/BB_UserProfileEdit.js');
var BB_userProfileEditRepo =  require('../Repository/BB_UserProfileEditRepo.js');
var BB_login = require('../Page/BB_Login.js');

var Utilities = function Utilities(){

    Utilities.prototype.ReplaceDoubleQuotesWithWhiteSpace = function (stringToReplace) {
        stringToReplace = stringToReplace.replace(/"/g,  " " );
        return stringToReplace;
    };

    Utilities.prototype.ExpectTextEqualsTo = function(elementToCheck, compareValuesString, success, failure){

        return elementToCheck.getText().then((Text)=>{
            if (Text == compareValuesString) {
                success();
            }
            else {
                failure();
            }
        });
        //this kill script and dont fail gracely and report are blank
        // expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
    };

    Utilities.prototype.AssertElementsToDisplay = function (isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay , success, failure ) {
        //browser.sleep(2000);

        if (isElementPresent == true) {
            Utilities.prototype.ExpectTextEqualsTo(elementToCheck, compareValuesString, success, failure);
        }
        else {
            console.log(consoleErrorMessageDisplay);
            // process.exit(1);
            failure();
        }
    };

    Utilities.prototype.Verify_ErrorMessageToDisplay = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {
        browser.sleep(4000);
        return new Promise ((success, failure)=> {
            switch (str_TextboxName.toLowerCase()) {
                case 'firstname':
                    // console.log(str_TextboxName.toLowerCase());
                    // console.log('|'+BB_userProfileEdit.firstName+'|');
                    if ((BB_userProfileEdit.firstName != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.firstName == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_FirstName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
                        });
                    }
                    break;

                case 'lastname':
                    if ((BB_userProfileEdit.lastName != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.lastName == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_LastName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name', success, failure);
                        });
                    }
                    break;

                case 'emailaddress':
                    if ((BB_userProfileEdit.emailAddress != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.emailAddress == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_Email, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address', success, failure);
                        });
                    }
                    break;

                case 'phonenumber':
                    if ((BB_userProfileEdit.phoneNumber != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number', success, failure);
                        });
                    }
                    break;

                case 'newpassword':
                    if ((BB_userProfileEdit.newPassword != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.newPassword == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_NewPassword).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_NewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
                        });
                    }
                    break;

                case 'confirmnewpassword':
                    if ((BB_userProfileEdit.confirmNewPassword != '' && FilledOrEmptyField == 'filled') || (BB_userProfileEdit.confirmNewPassword == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
                        });
                    }
                    break;

                case 'currentemailaddress':
                    if ((BB_login.currentEmailAddress != '' && FilledOrEmptyField == 'filled') || (BB_login.currentEmailAddress == '' && FilledOrEmptyField == 'empty')) {
                        browser.isElementPresent(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')).then(function (isPresente) {
                            Utilities.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Email Address', success, failure);
                        });
                    }
                    break;

                default:
                    console.log(str_TextboxName+' : is not part of switch statement in Verify_ErrorMessageToDisplay function.');
                    failure();
            }
        });
    };

    Utilities.prototype.AssertElementsNotToDisplay = function (isElementPresent, elementToCheck, consoleErrorMessageDisplay, success, failure )
    {
        if (isElementPresent == true) {
            return elementToCheck.getText().then((Text)=> {

                if (Text.trim() != "") {
                    console.log('ERROR: |' + Text + '|. ' + consoleErrorMessageDisplay);
                    //process.exit(1);
                    failure();
                }
                else
                {
                    console.log('passs: |');
                    //when element is present but it is empty string
                    success();
                }
            });
        }
        else {
            success();
        }
    };

    Utilities.prototype.Verify_ErrorMessagesNotToDisplay = function (TextboxName) {
        browser.sleep(4000);
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {

                case 'firstname':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_FirstName).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_FirstName, 'It should not show any errors in First Name', success, failure);
                    });
                    break;

                case 'lastname':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_LastName).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_LastName, 'It should not show any errors in Last Name', success, failure);
                    });
                    break;

                case 'emailaddress':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_Email).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_Email, 'It should not show any errors in Email Address', success, failure);
                    });
                    break;

                case 'phonenumber':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number', success, failure);
                    });
                    break;

                case 'newpassword':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_NewPassword).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_NewPassword, 'It should not show any errors in New Password', success, failure);
                    });
                    break;

                case 'confirmnewpassword':
                    browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, 'It should not show any errors in Confirm New Password', success, failure);
                    });
                    break;

                case 'currentemailaddress':
                    browser.isElementPresent(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')).then((isPresente)=> {
                        Utilities.prototype.AssertElementsNotToDisplay(isPresente, element(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')), 'It should not show any errors in Current Email Address', success, failure);
                    });
                    break;

                default:
                    console.log(TextboxName+' : is not part of switch statement in Verify_ErrorMessagesNotToDisplay function.');
                    failure();
            }
        });
    };
};
module.exports = new Utilities();