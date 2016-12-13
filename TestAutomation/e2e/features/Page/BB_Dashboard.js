/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var BB_dashboardRepo =  require('../Repository/BB_DashboardRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');

var OpenBlackBookDashboard = function OpenBlackBookDashboard(){

    OpenBlackBookDashboard.prototype.firstName = '';
    OpenBlackBookDashboard.prototype.lastName = '';
    OpenBlackBookDashboard.prototype.emailAddress = '';
    OpenBlackBookDashboard.prototype.phoneNumber = '';
    OpenBlackBookDashboard.prototype.newPassword = '';
    OpenBlackBookDashboard.prototype.confirmNewPassword = '';


    OpenBlackBookDashboard.prototype.OpenBlackBookDashboard = function(eyes) {

        return new Promise((success, failure)=> {
            //page is non-angular
            browser.ignoreSynchronization = true;
            //Open BlackBook website
            return browser.driver.get(BB_dashboardRepo.BlackBookUrl)
                .then(()=>
                {
                    if (protractorConfig.config.ApplitoolsOn == false) {
                        browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
                    }

                    browser.sleep(2000);
                    eyesSetUp.EyesCheckWindow(eyes, BB_dashboardRepo.EyesVerify_BB_Dashboard, protractorConfig.config.ApplitoolsOn);
                    success();
            });
        });
    };

    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile = function(success){
        return BB_dashboardRepo.Select_Element_TittleAddNewUserProfile.click().then(()=> {
          //  browser.sleep(1000);
            success();
        });
    };

   OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace = function (stringToReplace) {
       stringToReplace = stringToReplace.replace(/"/g,  " " );
       //console.log("HERE:"+ this.firstName+"Hi");
       return stringToReplace;
   };

   OpenBlackBookDashboard.prototype.Enter_FirstName = function (firstName) {

       this.firstName =  OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(firstName.toString());

       return new Promise((success, failure)=>
       {
             BB_dashboardRepo.Select_Element_FirstNameTextbox
               .sendKeys(this.firstName).then(()=> {
                 OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
             });
       });
   };

    OpenBlackBookDashboard.prototype.Enter_LastName = function (lastName) {
        this.lastName = OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(lastName.toString());

        return new Promise((success, failure)=> {
            BB_dashboardRepo.Select_Element_LastNameTextbox
                .sendKeys(this.lastName)
                .then(()=> {
                    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    OpenBlackBookDashboard.prototype.Enter_EmailAddress = function (emailAddress) {
        this.emailAddress = OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString());

        return new Promise((success, failure)=> {
            BB_dashboardRepo.Select_Element_EmailAddressTextbox
                .sendKeys(this.emailAddress)
                .then(()=> {
                    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    OpenBlackBookDashboard.prototype.Enter_PhoneNumber = function (phoneNumber) {
        this.phoneNumber = OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(phoneNumber.toString());

        return new Promise((success, failure)=> {
            BB_dashboardRepo.Select_Element_PhoneNumberTextbox
                .sendKeys(this.phoneNumber)
                .then(()=> {
                    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    OpenBlackBookDashboard.prototype.Enter_NewPassword = function (newPassword) {
        this.newPassword = OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(newPassword.toString());

        return new Promise((success, failure)=> {
            BB_dashboardRepo.Select_Element_NewPassword
                .sendKeys(this.newPassword)
                .then(()=> {
                    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    OpenBlackBookDashboard.prototype.Enter_ConfirmNewPassword = function (confirmNewPassword) {
        this.confirmNewPassword = OpenBlackBookDashboard.prototype.ReplaceDoubleQuotesWithWhiteSpace(confirmNewPassword.toString());

        return new Promise((success, failure)=> {
            BB_dashboardRepo.Select_Element_ConfirmNewPassword
                .sendKeys(this.confirmNewPassword)
                .then(()=> {
                    OpenBlackBookDashboard.prototype.Click_TittleAddNewUserProfile(success);
                });
        });
    };

    OpenBlackBookDashboard.prototype.AssertElementsToDisplay = function ( isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay  ) {
        //browser.sleep(2000);

        if (isElementPresent == true) {
            expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
        }
        else {
            console.log(consoleErrorMessageDisplay);
            // process.exit(1);
        }
    };

    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay = function ( isElementPresent, elementToCheck, consoleErrorMessageDisplay, success, failure )
    {
       if (isElementPresent == true) {
           return elementToCheck.getText().then((Text)=> {
               console.log('ERROR: ' + Text + '. ' + consoleErrorMessageDisplay);
               failure();
               //process.exit(1);
           });
       }
        else {
           success();
       }
    };

    OpenBlackBookDashboard.prototype.Verify_ErrorMessagesNotToDisplay = function (TextboxName) {
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {

                case 'firstname':
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_FirstName).then((isPresente)=> {
                            OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_FirstName, 'It should not show any errors in First Name', success, failure);
                        });
                    break;

                case 'lastname':
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_LastName).then((isPresente)=> {
                        OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_LastName, 'It should not show any errors in Last Name', success, failure);
                    });
                    break;

                case 'emailaddress':
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_Email).then((isPresente)=> {
                        OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_Email, 'It should not show any errors in Email Address', success, failure);
                    });
                    break;

                case 'phonenumber':
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then((isPresente)=> {
                        OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number', success, failure);
                    });
                    break;

                case 'newpassword':
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_NewPassword).then((isPresente)=> {
                        OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_NewPassword, 'It should not show any errors in New Password', success, failure);
                    });
                    break;

                case 'confirmnewpassword':
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then((isPresente)=> {
                        OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, 'It should not show any errors in Confirm New Password', success, failure);
                    });
                    break;
            }
        });
    };

    OpenBlackBookDashboard.prototype.Verify_ErrorMessageToDisplay = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {

        switch (str_TextboxName.toLowerCase()) {
            case 'firstname':
                if ((!this.firstName.empty && FilledOrEmptyField == 'filled') || (this.firstName =='' && FilledOrEmptyField == 'empty')){
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_FirstName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name');
                    });
                }
                break;

            case 'lastname':
                if ((!this.lastName.empty && FilledOrEmptyField == 'filled')|| (this.lastName =='' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_LastName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name');
                    });
                }
                break;

            case 'emailaddress':
                if ((!this.emailAddress.empty && FilledOrEmptyField == 'filled')|| (this.emailAddress =='' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_Email, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address');
                    });
                }
                break;

            case 'phonenumber':
                if ((!this.phoneNumber.empty && FilledOrEmptyField == 'filled')|| (this.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number');
                    });
                }
                break;

            case 'newpassword':
                if ((!this.newPassword.empty && FilledOrEmptyField == 'filled')|| (this.newPassword == '' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_NewPassword).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_NewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in New Password');
                    });
                }
                break;

            case 'confirmnewpassword':
                if ((!this.confirmNewPassword.empty && FilledOrEmptyField == 'filled')|| (this.confirmNewPassword == '' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_ConfirmNewPassword).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_ConfirmNewPassword, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Confirm New Password');
                    });
                }
                break;
        }
    };

    // if (typeof console == "undefined") {
    //     window.console = {
    //         log: function () {}
    //     };
    // }
    //Console.log(ispresent);
        // OpenBlackBookDashboard.prototype.closeAdsOnSoltechMainPage = function ()
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
   //     //        // BB_dashboardRepo.Select_Element_Ads_CloseXicon.click();
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
module.exports = new OpenBlackBookDashboard();
