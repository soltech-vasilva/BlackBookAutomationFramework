/**
 * Created by Vsilva on 1/20/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_EditRolesRepo = function BB_EditRolesRepo () {
    //Components
    BB_EditRolesRepo.prototype.Select_Element_Save_button  = element(by.css('button.button.green-btn'));
    BB_EditRolesRepo.prototype.Select_Element_X_button_MessagePopup  = element(by.css('span.pull-right.clear-btn'));
    BB_EditRolesRepo.prototype.Select_Element_Permission_Settings_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(1);
    BB_EditRolesRepo.prototype.Select_Xpath_SaveMessage_Popup = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/message-box/div/div'));
    BB_EditRolesRepo.prototype.Select_Element_SaveMessage_Popup  = element(by.css('div.message-container.success'));
};
module.exports = new BB_EditRolesRepo();