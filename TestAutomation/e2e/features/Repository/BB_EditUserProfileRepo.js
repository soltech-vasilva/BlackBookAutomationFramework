/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_EditUserProfileRepo = function BB_EditUserProfileRepo () {

    //Components Text
    BB_EditUserProfileRepo.prototype.Select_Element_TittleAddNewUserProfileText  = element(by.xpath('//*[@id="page-box"]/user-profile/div/div/h1/span'));
    //Components TextBox
    BB_EditUserProfileRepo.prototype.Select_Element_FirstNameTextbox  = element(by.css('input[placeholder="First Name"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_LastNameTextbox = element(by.css('input[placeholder="Last Name"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_EmailAddressTextbox = element(by.css('input[placeholder="Email"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_PhoneNumberTextbox = element(by.css('input[placeholder="Phone Number"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_NewPasswordTextbox = element(by.css('input[placeholder="New Password"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_ConfirmNewPasswordTextbox = element(by.css('input[placeholder="Confirm New Password"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_PreviousPasswordTextbox = element(by.css('input[placeholder="Previous Password"]'));
    BB_EditUserProfileRepo.prototype.Select_Element_FilterRoleSearchTextbox   = element(by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[3]/div[2]/div/div/input'));

    //Components Buttons
     //BB_EditUserProfileRepo.prototype.Select_Element_EditButton = element.all(by.css('button.button')).get(0);
     BB_EditUserProfileRepo.prototype.Select_Element_EditButton = element(by.css('button.button'));
    BB_EditUserProfileRepo.prototype.Select_Element_ResetButton = element(by.css('.button.yellow-btn.pull-right'));
    BB_EditUserProfileRepo.prototype.Select_Element_CancelButton = element(by.css('.button.red-btn.pull-right'));
    BB_EditUserProfileRepo.prototype.Select_Element_SaveButton = element(by.css('button.button.green-btn.pull-right'));
    BB_EditUserProfileRepo.prototype.Select_Element_UserActiveCheckbox = element(by.css('span.checkbox-label'));
    BB_EditUserProfileRepo.prototype.Select_Element_UsersRolesCheckbox_Administrator = element.all(by.css('span.icon-square-o.grid-checkbox-unchecked.grid-checkbox')).get(2);
    //Components "ERROR DISPLAY REQUIRE"
    BB_EditUserProfileRepo.prototype.Select_Xpath_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[2]/div/error-msg/span'); //old
    BB_EditUserProfileRepo.prototype.Select_Xpath_ERRORMESSAGE_FirstName_Require = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[2]/div/span');

    BB_EditUserProfileRepo.prototype.Select_Xpath_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[3]/div/error-msg/span'); //old
    BB_EditUserProfileRepo.prototype.Select_Xpath_ERRORMESSAGE_LastName_Require = by.xpath(' //*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[3]/div/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_Email_InvalidEmailAddress = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[4]/div/error-msg/span');
    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_Email_Require = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[4]/div/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_PhoneNumber = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[5]/div/error-msg/span');
    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character =  by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[2]/div/error-msg/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_NewPassword_Require =  by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[2]/div/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[3]/div/error-msg/span');
    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Require = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[3]/div/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_PreviousPassword_Require = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[1]/div/span');
    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_PreviousPassword_Leastbe8Character = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[1]/div/error-msg/span');

    BB_EditUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_UserRole = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[3]/div[4]/span');

    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters = element(this.Select_Xpath_ERRORMESSAGE_FirstName_SpacesAreInvalidCharacters);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_FirstName_Require = element(this.Select_Xpath_ERRORMESSAGE_FirstName_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters = element(this.Select_Xpath_ERRORMESSAGE_LastName_SpacesAreInvalidCharacters);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_LastName_Require = element(this.Select_Xpath_ERRORMESSAGE_LastName_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_Email_Require = element( this.Select_xpath_ERRORMESSAGE_Email_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_Email_InvalidEmailAddress = element( this.Select_xpath_ERRORMESSAGE_Email_InvalidEmailAddress);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_PhoneNumber = element( this.Select_xpath_ERRORMESSAGE_PhoneNumber);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_NewPassword_Leastbe8Character = element( this.Select_xpath_ERRORMESSAGE_NewPassword_Leastbe8Character);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_NewPassword_Require = element( this.Select_xpath_ERRORMESSAGE_NewPassword_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch = element( this.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_PassDontMatch);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_ConfirmNewPassword_Require = element( this.Select_xpath_ERRORMESSAGE_ConfirmNewPassword_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_PreviousPassword_Require = element( this.Select_xpath_ERRORMESSAGE_PreviousPassword_Require);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_PreviousPassword_Leastbe8Character = element( this.Select_xpath_ERRORMESSAGE_PreviousPassword_Leastbe8Character);
    BB_EditUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_UserRole = element(this.Select_xpath_ERRORMESSAGE_UserRole);

    BB_EditUserProfileRepo.prototype.Select_Xpath_ErrorMessage_Popup = element(by.xpath('//*[@id="page-box"]/user-profile/div/div/message-box/div/div'));
    BB_EditUserProfileRepo.prototype.Select_Element_ErrorMessage_Popup = element(by.css('div.message-container.error'));
};
module.exports = new BB_EditUserProfileRepo ();