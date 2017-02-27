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

var VerifyPopUpMessage = function VerifyPopUpMessage() {

    VerifyPopUpMessage.prototype.Verify_PopUpMessage = function (PopUpPageName , compareValuesString) {
        return new Promise((success, failure) => {
            switch (PopUpPageName.toLowerCase()) {
                case 'editroles':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_SuccessMessage_Popup);

                    browser.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                         //console.log(currentURL[1]);

                        if (currentURL[1].trim() == 'qa-autobahn.blackbookcloud.com/role/list') {

                            browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SuccessMessage_Popup).then((isPresente) => {
                                verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SuccessMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                            });
                        }
                        else {
                                browser.isElementPresent(by.xpath('//*[@id="page-box"]/role-profile/div/div/message-box/div/div')).then((isPresente) => {
                                verifyErrorMessage.AssertElementsToDisplay(isPresente, element(by.xpath('//*[@id="page-box"]/role-profile/div/div/message-box/div/div')), compareValuesString, 'It is not showing any message', success, failure);
                            });
                        }
                    });
                    break;

                case 'userlist':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_userListRepo.Select_Element_PopUpMESSAGE);

                    browser.getCurrentUrl().then(function (getCurrentURL) {

                        var currentURL = getCurrentURL.split("://");
                        //console.log(currentURL[1]);

                        if (currentURL[1].trim() == 'qa-autobahn.blackbookcloud.com/user/list') {
                            browser.isElementPresent(BB_userListRepo.Select_Xpath_PopUpMESSAGE).then((isPresente) => {
                                verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_userListRepo.Select_Element_PopUpMESSAGE, compareValuesString, 'It is not showing any message', success, failure);
                            });
                        }
                        else
                        {
                            browser.isElementPresent(BB_editUserProfileRepo.Select_Xpath_ErrorMessage_Popup).then((isPresente) => {
                                verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editUserProfileRepo.Select_Element_ErrorMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                            });
                        }
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