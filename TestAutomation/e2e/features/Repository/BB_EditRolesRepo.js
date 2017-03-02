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
    BB_EditRolesRepo.prototype.Select_Element_Cancel_button  = element(by.buttonText('Cancel'));

    BB_EditRolesRepo.prototype.Select_Element_X_button_MessagePopup  = element(by.css('span.pull-right.clear-btn'));

    BB_EditRolesRepo.prototype.Select_Element_Permission_Users_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(0);
    BB_EditRolesRepo.prototype.Select_Element_Permission_Settings_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(1);
    BB_EditRolesRepo.prototype.Select_Element_Permission_Roles_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(2);
    BB_EditRolesRepo.prototype.Select_Element_RolesIsUser_AllCheckbox  = element.all(by.css('.ag-cell-wrapper'));
    BB_EditRolesRepo.prototype.Select_Element_Permission_AllCheckboxs  =  element.all(by.css('span.ag-group-checkbox'));
    BB_EditRolesRepo.prototype.Select_Element_Permission_GridCheckbox  = element.all(by.css('span.icon-check-square.grid-checkbox-checked.grid-checkbox'));
    //BB_EditRolesRepo.prototype.Select_Xpath_SuccessMessage_Popup = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/message-box/div/div'));
    //BB_EditRolesRepo.prototype.Select_Xpath_SuccessMessage_Popup = element(by.xpath('//*[@id="page-box"]/role-list/div/div/div/message-box/div/div'));  //old
    BB_EditRolesRepo.prototype.Select_Xpath_SuccessMessage_Popup = element(by.xpath('//*[@id="page-box"]/role-list/div/div/message-box/div/div'));
    BB_EditRolesRepo.prototype.Select_Element_RoleMarket_dropdownbox = element(by.css('select[name="market"]'));
    BB_EditRolesRepo.prototype.Select_Element_SuccessMessage_Popup  = element(by.css('div.message-container.success'));

    BB_EditRolesRepo.prototype.Select_Element_FilterPermissionsTextbox = element.all(by.css('input[type="text"]')).get(1);
    BB_EditRolesRepo.prototype.Select_Element_FilterUsersTextbox = element.all(by.css('input[type="text"]')).get(2);
};
module.exports = new BB_EditRolesRepo();