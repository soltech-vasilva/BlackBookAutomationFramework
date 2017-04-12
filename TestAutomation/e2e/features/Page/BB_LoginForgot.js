/**
 * Created by Vsilva on 4/1/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var BB_loginForgotRepo = require('../Repository/BB_LoginForgotRepo.js');
var page = require ('../Page/Page_Objects');
var utilities = require('../Page/Utilities.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');

var BB_LoginForgot = function BB_LoginForgot() {

    BB_LoginForgot.prototype.emailAddress = '';

    BB_LoginForgot.prototype.Click_SendLinkButton = function () {
        return new Promise((success, failure) => {
            page.executeSequence([
                page.clickElement(BB_loginForgotRepo.Select_Element_SendLinkButton, protractorConfig.config.WaitTime),
                page.clearFocus()
            ]).then(()=>{success();});
        });
    };

    BB_LoginForgot.prototype.Enter_EmailAdress = function (emailAddress) {
        return new Promise((success, failure) => {
            page.executeSequence([this.emailAddress = utilities.ReplaceDoubleQuotesWithWhiteSpace(emailAddress.toString()),
                page.fill(BB_loginForgotRepo.Select_Element_EmailAddressTextbox, this.emailAddress, protractorConfig.config.WaitTime, BB_loginRepo.Select_Element_AutoBahnLogInPageImage, success)
            ]).then(() => {
            });
        });
    };
};
module.exports = new BB_LoginForgot();