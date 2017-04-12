/**
 * Created by Vsilva on 4/1/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_LoginForgotRepo = function BB_LoginForgotRepo () {

    //Components BUTTONS
    BB_LoginForgotRepo.prototype.Select_Element_SendLinkButton = element(by.xpath('//*[@id="login-box"]/div/form/div[2]/div[1]/button'));

    //Components TEXTBOX
    BB_LoginForgotRepo.prototype.Select_Element_EmailAddressTextbox = element(by.xpath('//*[@id="login-box"]/div/form/div[1]/input'));

};
module.exports = new BB_LoginForgotRepo();