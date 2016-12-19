/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_UserProfileEditRepo = function BB_UserProfileEditRepo () {

    //Strings
    BB_UserProfileEditRepo.prototype.EyesVerify_BB_Dashboard = 'BlackBook Dashboard';
    BB_UserProfileEditRepo.prototype.BlackBookUrl = 'http://localhost:3000/user';

    //Components
    BB_UserProfileEditRepo.prototype.Select_Element_FirstNameTextbox  = element(by.css('input[placeholder="First Name"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_LastNameTextbox = element(by.css('input[placeholder="Last Name"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_EmailAddressTextbox = element(by.css('input[placeholder="Email"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_PhoneNumberTextbox = element(by.css('input[placeholder="Phone Number"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_NewPassword = element(by.css('input[placeholder="Previous Password"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_ConfirmNewPassword = element(by.css('input[placeholder="Confirm New Password"]'));
    BB_UserProfileEditRepo.prototype.Select_Element_TittleAddNewUserProfile  = element(by.css('.title'));
    BB_UserProfileEditRepo.prototype.Select_Element_EditButton = element(by.buttonText('Edit'));
    BB_UserProfileEditRepo.prototype.Select_Element_ResetButton = element(by.buttonText('Reset'));

    //Components "ERROR DISPLAY REQUIRE"
    BB_UserProfileEditRepo.prototype.Select_Xpath_ERRORMESSAGE_FirstName = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[2]/div/error-msg/span');

    BB_UserProfileEditRepo.prototype.Select_Xpath_ERRORMESSAGE_LastName = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[3]/div/error-msg/span');
    BB_UserProfileEditRepo.prototype.Select_xpath_ERRORMESSAGE_Email = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[4]/div/error-msg/span');

    BB_UserProfileEditRepo.prototype.Select_xpath_ERRORMESSAGE_PhoneNumber = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[5]/div/error-msg/span');

    BB_UserProfileEditRepo.prototype.Select_xpath_ERRORMESSAGE_NewPassword =  by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[1]/div/error-msg/span');
    BB_UserProfileEditRepo.prototype.Select_xpath_ERRORMESSAGE_ConfirmNewPassword = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[2]/div/error-msg/span');

    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_FirstName = element(this.Select_Xpath_ERRORMESSAGE_FirstName);
    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_LastName = element(this.Select_Xpath_ERRORMESSAGE_LastName);
    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_Email = element( this.Select_xpath_ERRORMESSAGE_Email);
    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_PhoneNumber = element( this.Select_xpath_ERRORMESSAGE_PhoneNumber);
    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_NewPassword = element( this.Select_xpath_ERRORMESSAGE_NewPassword);
    BB_UserProfileEditRepo.prototype.Select_Element_ERRORMESSAGE_ConfirmNewPassword = element( this.Select_xpath_ERRORMESSAGE_ConfirmNewPassword);
};
module.exports = new BB_UserProfileEditRepo ();