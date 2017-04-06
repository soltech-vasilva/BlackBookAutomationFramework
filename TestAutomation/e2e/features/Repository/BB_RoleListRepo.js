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

    BB_RolesListRepo.prototype.Select_Element_Gear_View_Submenu =   function(rowNumber){
        this.rowNumber = rowNumber;
        return element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div['+this.rowNumber.toString()+']/div[3]/action-icon/div/div/ul/li[1]/div'));
    };
};
module.exports = new BB_RolesListRepo();
