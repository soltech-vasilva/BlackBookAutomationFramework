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
    BB_LoginRepo.prototype.BlackBookUrl = 'http://qa-autobahn.blackbookcloud.com/login';

    //Components
    BB_LoginRepo.prototype.Select_Element_UserEmailAddressTextbox  =  element(by.css('input[placeholder="Your Email"]'));
    BB_LoginRepo.prototype.Select_Element_UserPasswordTextbox = element(by.css('input[placeholder="Password"]'));
    BB_LoginRepo.prototype.Select_Element_LogInButton =  element(by.buttonText('LOGIN'));
};
module.exports = new BB_LoginRepo();