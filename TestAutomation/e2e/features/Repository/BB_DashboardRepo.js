/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var OpenBlackBookWebsiteRepo = function OpenBlackBookWebsiteRepo () {

    //Strings
    OpenBlackBookWebsiteRepo.prototype.EyesVerify_BB_Dashboard = 'BlackBook Dashboard';
    //OpenBlackBookWebsiteRepo.prototype.BlackBookUrl = 'http://soltech.net/';
    OpenBlackBookWebsiteRepo.prototype.BlackBookUrl = 'http://localhost:3000/user';

    //Components
    OpenBlackBookWebsiteRepo.prototype.Select_Element_FirstNameTextbox  = element(by.css('input[ng-reflect-name="firstName"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_LastNameTextbox = element(by.css('input[ng-reflect-name="lastName"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_EmailAddressTextbox = element(by.css('input[ng-reflect-name="username"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_PhoneNumberTextbox = element(by.css('input[ng-reflect-name="phoneNumber"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_NewPassword = element(by.css('input[ng-reflect-name="password"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ConfirmNewPassword = element(by.css('input[ng-reflect-name="passwordConfirm"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_TittleAddNewUserProfile  = element(by.css('.title'));

    //Components "ERROR DISPLAY REQUIRE"
    OpenBlackBookWebsiteRepo.prototype.Select_Xpath_ERRORMESSAGE_FirstName = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[2]/div/error-msg/span');
    OpenBlackBookWebsiteRepo.prototype.Select_Xpath_ERRORMESSAGE_LastName = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[3]/div/error-msg/span');
    OpenBlackBookWebsiteRepo.prototype.Select_xpath_ERRORMESSAGE_Email = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[4]/div/error-msg/span');
    OpenBlackBookWebsiteRepo.prototype.Select_xpath_ERRORMESSAGE_PhoneNumber = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[5]/div/error-msg/span');
    OpenBlackBookWebsiteRepo.prototype.Select_xpath_ERRORMESSAGE_NewPassword =  by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[7]/div[1]/div/error-msg/span');
    OpenBlackBookWebsiteRepo.prototype.Select_xpath_ERRORMESSAGE_ConfirmNewPassword = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/form/div[1]/div[7]/div[2]/div/error-msg/span');

    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_FirstName = element(this.Select_Xpath_ERRORMESSAGE_FirstName);
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_LastName = element(this.Select_Xpath_ERRORMESSAGE_LastName);
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_Email = element( this.Select_xpath_ERRORMESSAGE_Email);
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_PhoneNumber = element( this.Select_xpath_ERRORMESSAGE_PhoneNumber);
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_NewPassword = element( this.Select_xpath_ERRORMESSAGE_NewPassword);
    OpenBlackBookWebsiteRepo.prototype.Select_Element_ERRORMESSAGE_ConfirmNewPassword = element( this.Select_xpath_ERRORMESSAGE_ConfirmNewPassword);
};
module.exports = new OpenBlackBookWebsiteRepo ();