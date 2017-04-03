/**
 * Created by Vsilva on 4/2/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_roleListRepo = require('../Repository/BB_RoleListRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractor = require('protractor');
var page = require ('../Page/Page_Objects');

var BB_RoleList = function BB_RoleList() {

    BB_RoleList.prototype.Click_NewRole_Button = function () {

        return new Promise((success, failure)=> {
            page.clickButton(BB_roleListRepo.Select_Element_NewRoleButton, protractorConfig.config.WaitTime, success);
        });
    };

};
module.exports = new BB_RoleList();