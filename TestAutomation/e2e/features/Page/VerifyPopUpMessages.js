/**
 * Created by Vsilva on 1/26/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_userListRepo =  require('../Repository/BB_UserListRepo.js');
var utilities = require('../Page/Utilities.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');
var page = require ('../Page/Page_Objects');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var VerifyPopUpMessage = function VerifyPopUpMessage() {

    VerifyPopUpMessage.prototype.Verify_PopUpMessage = function (PopUpPageName , compareValuesString) {
        return new Promise((success, failure) => {
            switch (PopUpPageName.toLowerCase()) {
                case 'editroles':
                   // utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_RoleList);

                    page.executeSequence([browser.driver.sleep(2000), browser.driver.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                        // console.log(currentURL[1]);
                        var URL = BB_loginRepo.BlackBookUrl.split("://");
                        //console.log("URL:"+URL[1]);

                        if (currentURL[1].trim() == URL[1] + '/role/list') {
//TODO check mesage xpath.
                            console.log('yes role/list');
                            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_RoleList, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SuccessMessage_Popup_RoleList).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SuccessMessage_Popup_RoleList, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });
                        }
                        else {
                            console.log('NO role/list');
                            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SuccessMessage_Popup_EditRoles).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });
                        }
                    })]).then(()=>{});
                    break;

                case 'userlist':
                    //utilities.ExpectedElement_StopAutomationAtFail(BB_userListRepo.Select_Element_PopUpMESSAGE);
                    page.executeSequence([browser.driver.sleep(2000), browser.driver.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                        //console.log(currentURL[1]);
                        var URL = BB_loginRepo.BlackBookUrl.split("://");

                        if (currentURL[1].trim() == URL[1] + '/user/list') {
//TODO check mesage xpath.
                            console.log('yes user/list');
                            page.executeSequence([page.waitForElementTobePresent(BB_userListRepo.Select_Element_PopUpMESSAGE, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_userListRepo.Select_Xpath_PopUpMESSAGE).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_userListRepo.Select_Element_PopUpMESSAGE, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });

                            // browser.isElementPresent(BB_userListRepo.Select_Xpath_PopUpMESSAGE).then((isPresente) => {
                            //     verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_userListRepo.Select_Element_PopUpMESSAGE, compareValuesString, 'It is not showing any message', success, failure);
                            // });
                        }
                        else {
                            console.log('NO user/list');
                            page.executeSequence([page.waitForElementTobePresent(BB_editUserProfileRepo.Select_Element_ErrorMessage_Popup, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ErrorMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });

                            // browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup).then((isPresente) => {
                            //     verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ErrorMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                            // });
                        }
                    })]).then(()=>{});
                    break;

                default:
                    console.log(PopUpPageName+' : is not part of switch statement in Verify_UserInformation function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyPopUpMessage();