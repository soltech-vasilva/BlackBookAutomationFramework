/**
 * Created by Vsilva on 1/12/17.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var VerifyUserInfo = function VerifyUserInfo() {

    VerifyUserInfo.prototype.ValueStored = '';

    VerifyUserInfo.prototype.AssertElementAttributeDisplay = function (Element,  ValueCompare , TextboxName, success, failure) {

            return Element.getAttribute("value").then(function (currentValue) {
                this.ValueStored = currentValue;
                if (this.ValueStored == ValueCompare) {
                    //if (this.ValueEntered == 'dd') {
                    return page.clickButton(Element, protractorConfig.config.WaitTime,success);
                }
                else {
                    console.log(TextboxName + ' value stored: |' + this.ValueStored + '| is not equal to Value (Compare): |' + ValueCompare + '|');
                    return failure();
                }
            });
    };

    VerifyUserInfo.prototype.Verify_UserInformation = function (TextboxName , ValueCompare) {
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_FirstNameTextbox);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_FirstNameTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'lastname':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_LastNameTextbox);
                   VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_LastNameTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'emailaddress':
                        utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox);
                        VerifyUserInfo.prototype.AssertElementAttributeDisplay(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'phonenumber':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'newpassword':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'confirmnewpassword':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox);
                   VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'previouspassword' :
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'filterroles' :
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_FilterRoleSearchTextbox);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_FilterRoleSearchTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                default:
                    console.log(TextboxName+' : is not part of switch statement in Verify_UserInformation function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyUserInfo();