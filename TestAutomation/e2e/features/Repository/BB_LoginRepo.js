/**
 * Created by Vsilva on 12/16/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_LoginRepo = function BB_LoginRepo () {

    //Strings
    BB_LoginRepo.prototype.EyesVerify_BB_Login = 'BlackBook LogIn';
    //BB_LoginRepo.prototype.BlackBookEnvironmentUrl = 'https://autobahn.';
    BB_LoginRepo.prototype.BlackBookEnvironmentUrl = 'https://qa-autobahn.';
    BB_LoginRepo.prototype.BlackBookUrl = this.BlackBookEnvironmentUrl+'blackbookcloud.com';

    //Components TextBox
    BB_LoginRepo.prototype.Select_Element_UserEmailAddressTextbox  =  element(by.css('input[name="username"]'));
    BB_LoginRepo.prototype.Select_Element_UserPasswordTextbox = element(by.css('input[name="password"]'));
    //Components Button
    BB_LoginRepo.prototype.Select_Element_LogInButton =  element(by.css('button[type="submit"]'));
    BB_LoginRepo.prototype.Select_Element_ForgotPasswordLink = element(by.css('a[href="/login/forgot"]'));

    //Image
    BB_LoginRepo.prototype.Select_Element_AutoBahnLogInPageImage = element(by.xpath('//*[@id="login-box"]/div/div/img'));

    //Components "ERROR DISPLAY REQUIRE"
    BB_LoginRepo.prototype.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword = by.xpath('//*[@id="login-box"]/div/form/div[4]');
    BB_LoginRepo.prototype.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword = element(this.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword);

    BB_LoginRepo.prototype.Select_Xpath_SuccessMessage_Popup_Login = element(by.xpath('//*[@id="login-box"]/message-box/div/div'));
    BB_LoginRepo.prototype.Select_Element_SuccessMessage_Popup_Login = element(by.css('.message-container.success'));
};
module.exports = new BB_LoginRepo();