/**
 * Created by Vsilva on 1/26/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractorConfigfile = require('../Repository/BB_configuration.js');
var protractorConfig = require (protractorConfigfile.Path_protractorConfig);
var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var BB_userListRepo =  require('../Repository/BB_UserListRepo.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');
var page = require ('../Page/Page_Objects');

var VerifyPopUpMessage = function VerifyPopUpMessage() {

    VerifyPopUpMessage.prototype.Verify_PopUpMessage = function (PopUpPageName , compareValuesString) {
        return new Promise((success, failure) => {
            switch (PopUpPageName.toLowerCase()) {
                case 'editroles':
                    page.executeSequence([browser.sleep(2000), browser.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                        var URL = BB_loginRepo.BlackBookUrl.split("://");

                        if (currentURL[1].trim() == URL[1] + '/role/list') {
                            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_RoleList, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SuccessMessage_Popup_RoleList).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SuccessMessage_Popup_RoleList, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });
                        }
                        else {
                            page.executeSequence([page.waitForElementTobePresent(BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SuccessMessage_Popup_EditRoles).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SuccessMessage_Popup_EditRoles, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });
                        }
                    })]).then(()=>{});
                    break;

                case 'userlist':
                    page.executeSequence([browser.sleep(2000), browser.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                        var URL = BB_loginRepo.BlackBookUrl.split("://");

                        if (currentURL[1].trim() == URL[1] + '/user/list') {
                            page.executeSequence([page.waitForElementTobePresent(BB_userListRepo.Select_Element_PopUpMESSAGE, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_userListRepo.Select_Xpath_PopUpMESSAGE).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_userListRepo.Select_Element_PopUpMESSAGE, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {
                            });
                        }
                        else {
                            page.executeSequence([page.waitForElementTobePresent(BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup, protractorConfig.config.WaitTime),
                                browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup).then((isPresente) => {
                                    verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                                })]).then(() => {});
                        }
                    })]).then(()=>{});
                    break;

                case 'login':
                    page.executeSequence([page.waitForElementTobePresent(BB_loginRepo.Select_Element_SuccessMessage_Popup_Login, protractorConfig.config.WaitTime),
                        browser.isElementPresent(BB_loginRepo.Select_Xpath_SuccessMessage_Popup_Login).then((isPresente) => {
                            verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_loginRepo.Select_Element_SuccessMessage_Popup_Login, compareValuesString, 'It is not showing any message', success, failure);
                        })]).then(() => {
                    });

                    break;

                case 'editsegment':
                    page.executeSequence([page.waitForElementTobePresent(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/message-box/div/div')), protractorConfig.config.WaitTime),
                        browser.isElementPresent(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/message-box/div/div'))).then((isPresente) => {
                            verifyErrorMessage.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/create-segment/div/div/message-box/div/div')), compareValuesString, 'It is not showing any message', success, failure);
                        })]).then(() => {
                    });

                    break;
                default:
                    console.log(PopUpPageName+' : is not part of switch statement in Verify_UserInformation function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyPopUpMessage();