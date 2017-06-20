/**
 * Created by Vsilva on 12/16/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_LoginRepo = function BB_LoginRepo () {

    //Components STRING
    //BB_LoginRepo.prototype.BlackBookEnvironmentUrl = 'https://autobahn.';
    BB_LoginRepo.prototype.BlackBookEnvironmentUrl = 'https://qa-autobahn.';
    //BB_LoginRepo.prototype.BlackBookEnvironmentUrl = 'https://dev-autobahn.';
    BB_LoginRepo.prototype.BlackBookUrl = this.BlackBookEnvironmentUrl+'blackbookcloud.com';

    //Components BUTTONS
    //BB_LoginRepo.prototype.Select_Element_LogInButton =  element(by.css('button[type="submit"]'));
    //Todo check if xpath wotk for button click login
    // BB_LoginRepo.prototype.Select_Element_LogInButton =  element(by.xpath('//*[@id="login-box"]/div/form/div[3]/button'));
    BB_LoginRepo.prototype.Select_Element_LogInButton =  element(by.id('loginSubmitButton'));
    BB_LoginRepo.prototype.Select_Element_ForgotPasswordLink = element(by.css('a[href="/login/forgot"]'));

    //Components TEXTBOX
    //BB_LoginRepo.prototype.Select_Element_UserEmailAddressTextbox  =  element(by.css('input[name="username"]'));
    BB_LoginRepo.prototype.Select_Element_UserEmailAddressTextbox  =  element(by.id('loginEmail'));
    // BB_LoginRepo.prototype.Select_Element_UserPasswordTextbox = element(by.css('input[name="password"]'));
    BB_LoginRepo.prototype.Select_Element_UserPasswordTextbox = element(by.id('loginPassword'));

    //Components IMAGE
    // BB_LoginRepo.prototype.Select_Element_AutoBahnLogInPageImage = element(by.xpath('//*[@id="login-box"]/div/div/img'));
    BB_LoginRepo.prototype.Select_Element_AutoBahnLogInPageImage = element(by.css('span.login-title'));

    //Components "SUCCESS MESSAGE DISPLAY"
    BB_LoginRepo.prototype.Select_Xpath_SuccessMessage_Popup_Login = element(by.xpath('//*[@id="login-box"]/message-box/div/div'));
    BB_LoginRepo.prototype.Select_Element_SuccessMessage_Popup_Login = element(by.css('.message-container.success'));

    //Components "ERROR MESSAGE DISPLAY"
    BB_LoginRepo.prototype.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword = by.xpath('//*[@id="login-box"]/div/form/div[4]');
    BB_LoginRepo.prototype.Select_Element_ERRORMESSAGE_CurrentEmailAddressAndPassword = element(this.Select_Xpath_ERRORMESSAGE_CurrentEmailAddressAndPassword);
};
module.exports = new BB_LoginRepo();