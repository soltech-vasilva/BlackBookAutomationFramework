/**
 * Created by Vsilva on 1/26/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var verifyErrorMessage = require('../Page/VerifyErrorMessage.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_userListRepo =  require('../Repository/BB_UserListRepo.js');
var utilities = require('../Page/Utilities.js');

var VerifyPopUpMessage = function VerifyPopUpMessage() {

    VerifyPopUpMessage.prototype.Verify_PopUpMessage = function (PopUpPageName , compareValuesString) {
        return new Promise((success, failure) => {
            switch (PopUpPageName.toLowerCase()) {
                case 'editroles':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editRolesRepo.Select_Element_SaveMessage_Popup);
                    browser.isElementPresent(BB_editRolesRepo.Select_Xpath_SaveMessage_Popup).then((isPresente) => {
                        verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_editRolesRepo.Select_Element_SaveMessage_Popup, compareValuesString, 'It is not showing any message', success, failure);
                    });
                    break;

                case 'userlist':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_userListRepo.Select_Element_PopUpMESSAGE);
                    browser.isElementPresent(BB_userListRepo.Select_Xpath_PopUpMESSAGE).then((isPresente) => {
                        verifyErrorMessage.AssertElementsToDisplay(isPresente, BB_userListRepo.Select_Element_PopUpMESSAGE, compareValuesString, 'It is not showing any message', success, failure);
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