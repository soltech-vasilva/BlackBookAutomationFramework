/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var BB_userProfileEditRepo =  require('../Repository/BB_UserProfileEditRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');
var utilities = require('../Page/Utilities.js');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');

var BB_UserProfileEdit = function BB_UserProfileEdit(){

    BB_UserProfileEdit.prototype.firstName = '';
    BB_UserProfileEdit.prototype.lastName = '';
    BB_UserProfileEdit.prototype.emailAddress = '';
    BB_UserProfileEdit.prototype.phoneNumber = '';
    BB_UserProfileEdit.prototype.newPassword = '';
    BB_UserProfileEdit.prototype.confirmNewPassword = '';
    BB_UserProfileEdit.prototype.previousPassword = '';

    BB_UserProfileEdit.prototype.OpenBlackBookDashboard = function(eyes) {

        return new Promise((success, failure)=> {
            //page is non-angular
            browser.ignoreSynchronization = true;
            //Open BlackBook website
            return browser.driver.get(BB_userProfileEditRepo.BlackBookUrl)
                .then(()=> {
                    if (protractorConfig.config.ApplitoolsOn == false) {
                        browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
                    }
                    eyesSetUp.EyesCheckWindow(eyes, BB_userProfileEditRepo.EyesVerify_BB_Dashboard, protractorConfig.config.ApplitoolsOn);
                    success();
                });
        });
    };

    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile = function(success){
        return BB_userProfileEditRepo.Select_Element_TittleAddNewUserProfile.click().then(()=> {
          //  browser.sleep(1000);
            success();
        });
    };

   BB_UserProfileEdit.prototype.Enter_FirstName = function (firstName) {
       //timeout issues on loading page so I added 2sec before it starts typing.
       //browser.sleep(2000);
       this.firstName =   utilities.ReplaceDoubleQuotesWithWhiteSpace(firstName.toString());
       browser.wait(protractor.ExpectedConditions.presenceOf( BB_userProfileEditRepo.Select_Element_FirstNameTextbox), 10000);
       BB_userProfileEditRepo.Select_Element_FirstNameTextbox.click();

       return new Promise((success, failure)=> {
           BB_userProfileEditRepo.Select_Element_FirstNameTextbox
               .sendKeys(this.firstName).then(()=> {
               BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
           });
       });
   };

    BB_UserProfileEdit.prototype.Enter_LastName = function (lastName) {
        this.lastName = utilities.ReplaceDoubleQuotesWithWhiteSpace(lastName.toString());
        BB_userProfileEditRepo.Select_Element_LastNameTextbox.click();

        //TODO : delete this clear
        BB_userProfileEditRepo.Select_Element_LastNameTextbox.clear();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_LastNameTextbox
                .sendKeys(this.lastName)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.Enter_EmailAddress = function (emailAddress) {
        this.emailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString());
        BB_userProfileEditRepo.Select_Element_EmailAddressTextbox.click();

        //TODO : delete this clear
        BB_userProfileEditRepo.Select_Element_EmailAddressTextbox.clear();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_EmailAddressTextbox
                .sendKeys(this.emailAddress)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.Enter_PhoneNumber = function (phoneNumber) {
        this.phoneNumber = utilities.ReplaceDoubleQuotesWithWhiteSpace(phoneNumber.toString());
        BB_userProfileEditRepo.Select_Element_PhoneNumberTextbox.click();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_PhoneNumberTextbox
                .sendKeys(this.phoneNumber)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.Enter_NewPassword = function (newPassword) {
        this.newPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(newPassword.toString());
        BB_userProfileEditRepo.Select_Element_NewPassword.click();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_NewPassword
                .sendKeys(this.newPassword)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.Enter_ConfirmNewPassword = function (confirmNewPassword) {
        this.confirmNewPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(confirmNewPassword.toString());
        BB_userProfileEditRepo.Select_Element_ConfirmNewPassword.click();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_ConfirmNewPassword
                .sendKeys(this.confirmNewPassword)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.Enter_PreviousPassword = function (previousPassword) {
        this.previousPassword = utilities.ReplaceDoubleQuotesWithWhiteSpace(previousPassword.toString());
        BB_userProfileEditRepo.Select_Element_PreviousPassword.click();

        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_PreviousPassword
                .sendKeys(this.previousPassword)
                .then(()=> {
                    BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    BB_UserProfileEdit.prototype.DeleteContentInTextBox = function (TextboxName) {
        return new Promise((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    BB_UserProfileEdit.prototype.Click_Delete_Content(success, BB_userProfileEditRepo.Select_Element_FirstNameTextbox);
                    break;
                case 'lastname':
                    BB_UserProfileEdit.prototype.Click_Delete_Content(success, BB_userProfileEditRepo.Select_Element_LastNameTextbox);
                    break;
                case 'emailaddress':
                    BB_UserProfileEdit.prototype.Click_Delete_Content(success, BB_userProfileEditRepo.Select_Element_EmailAddressTextbox);
                    break;
                case 'newpassword':
                    BB_UserProfileEdit.prototype.Click_Delete_Content(success, BB_userProfileEditRepo.Select_Element_NewPassword);
                    break;
                case 'confirmnewpassword':
                    BB_UserProfileEdit.prototype.Click_Delete_Content(success, BB_userProfileEditRepo.Select_Element_ConfirmNewPassword);
                    break;
                default:
                    console.log(TextboxName + ' : is not part of switch statement in DeleteContentInTextBox function.');
                    failure();
            }
        });
    };

    BB_UserProfileEdit.prototype.Click_Delete_Content = function(success, ElementToClick)
    {
        ElementToClick.click();
        keyStrokesRepo.CONTROL_ALL_DELETE();
        BB_UserProfileEdit.prototype.Click_TittleAddNewUserProfile(success);
    };

    BB_UserProfileEdit.prototype.Click_EditButton = function () {
        //This give a time to transition
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userProfileEditRepo.Select_Element_EditButton), 10000);
        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_EditButton.click().then(()=> {
                success();
            });
        });
    };

    BB_UserProfileEdit.prototype.Click_ResetButton = function () {
        //This give a time to transition
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userProfileEditRepo.Select_Element_ResetButton), 10000);
        return new Promise((success, failure)=> {
            BB_userProfileEditRepo.Select_Element_ResetButton.click().then(()=> {
                success();
            });
        });
    };


    // BB_UserProfileEdit.prototype.AssertElementsToDisplay = function (isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay , success, failure ) {
    //     //browser.sleep(2000);
    //
    //     if (isElementPresent == true) {
    //         verifyMessage.ExpectTextEqualsTo(elementToCheck, compareValuesString, success, failure);
    //     }
    //     else {
    //         console.log(consoleErrorMessageDisplay);
    //         // process.exit(1);
    //         failure();
    //     }
    // };

    // BB_UserProfileEdit.prototype.AssertElementsNotToDisplay = function (isElementPresent, elementToCheck, consoleErrorMessageDisplay, success, failure )
    // {
    //    if (isElementPresent == true) {
    //        return elementToCheck.getText().then((Text)=> {
    //
    //            if (Text.trim() != "") {
    //                console.log('ERROR: |' + Text + '|. ' + consoleErrorMessageDisplay);
    //                //process.exit(1);
    //                failure();
    //            }
    //            else
    //            {
    //                //when element is present but it is empty string
    //                success();
    //            }
    //        });
    //    }
    //     else {
    //        success();
    //    }
    // };
    //
    // BB_UserProfileEdit.prototype.Verify_ErrorMessagesNotToDisplay = function (TextboxName) {
    //     return new Promise ((success, failure)=> {
    //         switch (TextboxName.toLowerCase()) {
    //
    //             case 'firstname':
    //                 browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_FirstName).then((isPresente)=> {
    //                         BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_FirstName, 'It should not show any errors in First Name', success, failure);
    //                     });
    //                 break;
    //
    //             case 'lastname':
    //                 browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_LastName).then((isPresente)=> {
    //                     BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_LastName, 'It should not show any errors in Last Name', success, failure);
    //                 });
    //                 break;
    //
    //             case 'emailaddress':
    //                 browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_Email).then((isPresente)=> {
    //                     BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_Email, 'It should not show any errors in Email Address', success, failure);
    //                 });
    //                 break;
    //
    //             case 'phonenumber':
    //                 browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then((isPresente)=> {
    //                     BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number', success, failure);
    //                 });
    //                 break;
    //
    //             case 'newpassword':
    //                 browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_NewPassword).then((isPresente)=> {
    //                     BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_NewPassword, 'It should not show any errors in New Password', success, failure);
    //                 });
    //                 break;
    //
    //             case 'confirmnewpassword':
    //                  browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then((isPresente)=> {
    //                      BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, 'It should not show any errors in Confirm New Password', success, failure);
    //                 });
    //                 break;
    //
    //             case 'currentemailaddress':
    //                 browser.isElementPresent(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')).then((isPresente)=> {
    //                     BB_UserProfileEdit.prototype.AssertElementsNotToDisplay(isPresente, element(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')), 'It should not show any errors in Current Email Address', success, failure);
    //                 });
    //                 break;
    //
    //             default:
    //                 console.log(TextboxName+' : is not part of switch statement in Verify_ErrorMessagesNotToDisplay function.');
    //                 failure();
    //         }
    //     });
    // };

    // BB_UserProfileEdit.prototype.Verify_ErrorMessageToDisplay = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {
    //     return new Promise ((success, failure)=> {
    //         switch (str_TextboxName.toLowerCase()) {
    //             case 'firstname':
    //                 if ((!this.firstName.empty && FilledOrEmptyField == 'filled') || (this.firstName == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_FirstName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'lastname':
    //                 if ((!this.lastName.empty && FilledOrEmptyField == 'filled') || (this.lastName == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_LastName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'emailaddress':
    //                 if ((!this.emailAddress.empty && FilledOrEmptyField == 'filled') || (this.emailAddress == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_Email, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'phonenumber':
    //                 if ((!this.phoneNumber.empty && FilledOrEmptyField == 'filled') || (this.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'newpassword':
    //                 if ((!this.newPassword.empty && FilledOrEmptyField == 'filled') || (this.newPassword == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_NewPassword).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_NewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'confirmnewpassword':
    //                 if ((!this.confirmNewPassword.empty && FilledOrEmptyField == 'filled') || (this.confirmNewPassword == '' && FilledOrEmptyField == 'empty')) {
    //                     browser.isElementPresent(BB_userProfileEditRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then(function (isPresente) {
    //                         BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, BB_userProfileEditRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password', success, failure);
    //                     });
    //                 }
    //                 break;
    //
    //             case 'currentemailaddress':
    //                     if ((!BB_login.currentEmailAddress.empty && FilledOrEmptyField == 'filled') || (BB_login.currentEmailAddress == '' && FilledOrEmptyField == 'empty')) {
    //                         browser.isElementPresent(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')).then(function (isPresente) {
    //                             BB_UserProfileEdit.prototype.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="login-box"]/div/div[2]/div[4]')), str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Current Email Address login page', success, failure);
    //                         });
    //                     }
    //                 break;
    //
    //             default:
    //                 console.log(str_TextboxName+' : is not part of switch statement in Verify_ErrorMessageToDisplay function.');
    //                 failure();
    //         }
    //     });
    // };

    // if (typeof console == "undefined") {
    //     window.console = {
    //         log: function () {}
    //     };
    // }
    //Console.log(ispresent);
        // BB_UserProfileEdit.prototype.closeAdsOnSoltechMainPage = function ()
   // {
   //    //  var displayed ='hhhhhh';
   //    //
   //    //  browser.sleep(2000);
   //    // var ele = browser.element(by.xpath('//*[@id="columbus-optin-wrapper"]/a'));
   //    //
   //    //  ele.isDisplayed().then(function(visible){
   //    //          displayed = visible;
   //    //      });
   //    //
   //    //  console.log(displayed);
   //    // expect(ele.isDisplayed()).toBe(true);
   //     // .isDisplayed().then(function(visible){
   //     //     displayed = visible;
   //     // });
   //
   //     //Closing Ads when scrolling for applitools can scan items on page.
   //     // browser.executeScript('window.scrollTo(0,1048);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,2096);').then(function () {
   //     //     browser.sleep(4000);
   //     //
   //     //     if (displayed == true)
   //     //     {
   //     //         console.log(visible);
   //     //        // BB_userProfileEditRepo.Select_Element_Ads_CloseXicon.click();
   //     //         displayed = false;
   //     //     }
   //     //     browser.sleep(3000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,0);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //
   //     // then(function() {
   //     //     browser.sleep(3000);
   //     //     browser.executeScript('window.scrollTo(0,0);');
   //     //     browser.sleep(3000);
   //     // });
   // };
};
module.exports = new BB_UserProfileEdit();
