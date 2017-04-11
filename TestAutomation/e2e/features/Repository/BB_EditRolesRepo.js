/**
 * Created by Vsilva on 1/20/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_EditRolesRepo = function BB_EditRolesRepo () {

    //string
    BB_EditRolesRepo.prototype.AttributeString_Permission_GridCheckbox_Checked  = "icon-check-square grid-checkbox-checked grid-checkbox";
    BB_EditRolesRepo.prototype.AttributeString_Permission_GridCheckbox_Unchecked  = "icon-check-square grid-checkbox-checked grid-checkbox ag-hidden";
    BB_EditRolesRepo.prototype.Select_Element_TittleAddNewRole  = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/h1/span'));

//Components
    BB_EditRolesRepo.prototype.Select_Element_Confirm_button_RoleList  =    element(by.xpath('//*[@id="page-box"]/role-list/div/div/div/dynamic-modal/modal/div/div/div[2]/div[2]/div[1]/button'));
    BB_EditRolesRepo.prototype.Select_Element_Confirm_button_RoleProfile  = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/dynamic-modal/modal/div/div/div[2]/div[2]/div[1]/button'));
    BB_EditRolesRepo.prototype.Select_Element_Edit_button  = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/div/button'));
    BB_EditRolesRepo.prototype.Select_Element_Save_button  = element(by.css('button.button.green-btn'));
    BB_EditRolesRepo.prototype.Select_Element_Cancel_button  = element(by.buttonText('Cancel'));
    BB_EditRolesRepo.prototype.Select_Element_Reset_button  = element(by.css('button.button.yellow-btn'));

    BB_EditRolesRepo.prototype.Select_Element_Delete_button  = element(by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/div/button[2]'));

    BB_EditRolesRepo.prototype.Select_Element_Cancel_button_PopMenu  = element(by.css('button.button.red-btn'));
    BB_EditRolesRepo.prototype.Select_Element_FilterByGroupDropdown  = element.all(by.css('select[name="filterGroupTerm"]')).get(0);
    BB_EditRolesRepo.prototype.Select_Element_FilterByStatusDropdown  = element.all(by.css('select[name="filterGroupTerm"]')).get(1);
    BB_EditRolesRepo.prototype.Select_Element_Permission_Users_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(4);
    BB_EditRolesRepo.prototype.Select_Element_Permission_Settings_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(2);
    BB_EditRolesRepo.prototype.Select_Element_Permission_Roles_Checkbox  =  element.all(by.css('span.ag-group-checkbox')).get(0);
    BB_EditRolesRepo.prototype.Select_Element_RolesIsUser_AllCheckbox  = element.all(by.css('.ag-cell-wrapper'));
    BB_EditRolesRepo.prototype.Select_Element_Permission_AllCheckboxs  =  element.all(by.css('span.ag-group-checkbox'));
    BB_EditRolesRepo.prototype.Select_Element_Permission_GridCheckbox  = element.all(by.css('span.icon-check-square.grid-checkbox-checked.grid-checkbox'));

    BB_EditRolesRepo.prototype.Select_Element_CircleIconPermission = element.all(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div/div/span/span[2]/span'));
    BB_EditRolesRepo.prototype.Select_Xpath_SuccessMessage_Popup_EditRoles =by.xpath('//*[@id="page-box"]/role-profile/div/div/message-box/div/div');
    BB_EditRolesRepo.prototype.Select_Element_SuccessMessage_Popup_EditRoles = element(this.Select_Xpath_SuccessMessage_Popup_EditRoles);

    BB_EditRolesRepo.prototype.Select_Element_RoleMarketDropdown = element(by.css('select[name="market"]'));

    BB_EditRolesRepo.prototype.Select_Xpath_SuccessMessage_Popup_RoleList =by.xpath('//*[@id="page-box"]/role-list/div/div/message-box/div/div');
    BB_EditRolesRepo.prototype.Select_Element_SuccessMessage_Popup_RoleList  = element(by.css('div.message-container.success'));//so I added css

    BB_EditRolesRepo.prototype.Select_Element_FilterPermissionsTextbox = element.all(by.css('input[type="text"]')).get(1);
    BB_EditRolesRepo.prototype.Select_Element_FilterUsersTextbox = element.all(by.css('input[type="text"]')).get(2);
    BB_EditRolesRepo.prototype.Select_Element_RoleNameTextbox = element.all(by.css('input[type="text"]')).get(0);

    //Components "ERROR DISPLAY REQUIRE"

    BB_EditRolesRepo.prototype.Select_xpath_ERRORMESSAGE_RoleName_Require =  by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[1]/div/span');
    BB_EditRolesRepo.prototype.Select_xpath_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters =  by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[1]/div/div');
    BB_EditRolesRepo.prototype.Select_xpath_ERRORMESSAGE_RoleMarket_Require =  by.xpath('//*[@id="page-box"]/role-profile/div/div/div[1]/form/div[2]/div[2]/div/span');
    BB_EditRolesRepo.prototype.Select_Element_ERRORMESSAGE_RoleName_Require = element( this.Select_xpath_ERRORMESSAGE_RoleName_Require);
    BB_EditRolesRepo.prototype.Select_Element_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters = element( this.Select_xpath_ERRORMESSAGE_RoleName_SpacesAreInvalidCharacters);
    BB_EditRolesRepo.prototype.Select_Element_ERRORMESSAGE_RoleMarket_Require = element( this.Select_xpath_ERRORMESSAGE_RoleMarket_Require);

    BB_EditRolesRepo.prototype.Select_Element_ConfirmPopupMessage_Popup_RoleList  = element(by.css('.warning-msg'));
};
module.exports = new BB_EditRolesRepo();