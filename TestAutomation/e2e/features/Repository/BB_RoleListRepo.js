/**
 * Created by Vsilva on 4/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_RolesListRepo = function BB_RolesListRepo () {
    BB_RolesListRepo.prototype.Select_Element_NewRoleButton  = element(by.css('button.button'));
    BB_RolesListRepo.prototype.Select_Element_NumberOfUsersColumn  = element.all(by.css('div[colid="users"]'));
    BB_RolesListRepo.prototype.Select_Element_Xpath_ConfirmPopupMessage_Popup_RoleList = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/dynamic-modal/modal/div/div/div[2]/div[1]/div'));
    BB_RolesListRepo.prototype.Select_Element_ConfirmPopupMessage_Popup_RoleList  = element(by.css('.warning-msg'));
};
module.exports = new BB_RolesListRepo();
