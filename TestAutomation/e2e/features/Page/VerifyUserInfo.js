/**
 * Created by Vsilva on 1/12/17.
 */

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_editUserProfileRepo =  require('../Repository/BB_EditUserProfileRepo.js');
var utilities = require('../Page/Utilities.js');

var VerifyUserInfo = function VerifyUserInfo() {

    VerifyUserInfo.prototype.ValueStored = '';

    VerifyUserInfo.prototype.AssertElementAttributeDisplay = function (Element,  ValueCompare , TextboxName, success, failure) {
        return Element.getAttribute("value").then(function (currentValue) {
            this.ValueStored = currentValue;
            //console.log('Value Stored:|' + this.ValueStored.toString() + '|');
            if (this.ValueStored == ValueCompare) {
                //if (this.ValueEntered == 'dd') {
                Element.click();
                return success();
            }
            else {
                console.log(TextboxName+' value stored: |'+this.ValueStored+'| is not equal to Value (Compare): |'+ ValueCompare+'|');
                return failure ();
            }
        });
    };

    VerifyUserInfo.prototype.Verify_UserInformation = function (TextboxName , ValueCompare) {
        return new Promise ((success, failure)=> {
            switch (TextboxName.toLowerCase()) {
                case 'firstname':
                    // console.log(TextboxName.toLowerCase());
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_FirstNameTextbox);
                   // browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_FirstNameTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_FirstNameTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'lastname':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_LastNameTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_LastNameTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_LastNameTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'emailaddress':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_EmailAddressTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_EmailAddressTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_EmailAddressTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'phonenumber':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_PhoneNumberTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'newpassword':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_NewPasswordTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_NewPasswordTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_NewPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'confirmnewpassword':
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_ConfirmNewPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                case 'previouspassword' :
                    utilities.ExpectedElement_StopAutomationAtFail(BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox);
                    //browser.wait(protractor.ExpectedConditions.presenceOf( BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox), 10000);
                    VerifyUserInfo.prototype.AssertElementAttributeDisplay( BB_editUserProfileRepo.Select_Element_PreviousPasswordTextbox, ValueCompare, TextboxName, success, failure);
                    break;

                default:
                    console.log(TextboxName+' : is not part of switch statement in Verify_UserInformation function.');
                    failure();
            }
        });
    };
};
module.exports = new VerifyUserInfo();