/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_UserListRepo = function BB_UserListRepo () {
    BB_UserListRepo.prototype.rowNumber = '0';

    BB_UserListRepo.prototype.Select_Element_TittleUserList  = element(by.xpath('//*[@id="page-box"]/user-list/div/div/h1/span'));
    //Components Button
    //BB_UserListRepo.prototype.Select_Element_NewUserButton  = element(by.css('button.button'));
    BB_UserListRepo.prototype.Select_Element_NewUserButton  = element(by.xpath('//*[@id="page-box"]/user-list/div/div/div/div[1]/button'));

    BB_UserListRepo.prototype.Select_Element_FilterUserListTextbox = element(by.css('input[type="text"]')); //TODO no quitar orijinal problemas con chrome viejo en mi computadora. Pero sirve con el nuevo.

    BB_UserListRepo.prototype.Select_Element_StatusFilter = element(by.css('select[name="statusFilterTerm"]'));
    BB_UserListRepo.prototype.Select_Element_StatusFilter_Inactive_Submenu = element(by.css('option[value=\"inactive\"]'));
    BB_UserListRepo.prototype.Select_Element_StatusFilter_Active_Submenu = element(by.css('option[value=\"active\"]'));
    BB_UserListRepo.prototype.Select_Element_StatusFilter_All_Submenu = element(by.css('option[value=\"all\"]'));

    BB_UserListRepo.prototype.Select_Element_EditGeardIcon = element.all(by.css('div.icon-cog.parent'));
    BB_UserListRepo.prototype.Select_Element_GeardIcon_Inactive = element(by.css('div.icon-cog.parent.inactive'));

    BB_UserListRepo.prototype.Select_Element_Gear_Activate_Submenu = element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div/div[9]/action-icon/div/div/ul/li[3]/a'));
                                                                                   //*[@id="center"]/div/div[4]/div[3]/div/div/div[2]/div[9]/action-icon/div/div/ul/li[1]/div

    BB_UserListRepo.prototype.Select_Element_Gear_View_Submenu =   function(rowNumber){
        this.rowNumber = rowNumber;
        return element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div['+this.rowNumber.toString()+']/div[9]/action-icon/div/div/ul/li[1]/div'));
    };

    //BB_UserListRepo.prototype.Select_Element_Gear_View_Submenu = element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div[5]/div[3]/action-icon/div/div/ul/li[1]/div'));  //roles original
    //BB_UserListRepo.prototype.Select_Element_Gear_View_Submenu = element(by.linkText('View')); //test
    BB_UserListRepo.prototype.Select_Element_Gear_Deactivate_Submenu = element(by.linkText('Deactivate'));
    BB_UserListRepo.prototype.Select_Element_Gear_Edit_Submenu = element(by.linkText('Edit'));
    BB_UserListRepo.prototype.Select_Element_Gear_Delete_Submenu = element(by.linkText('Delete'));
    BB_UserListRepo.prototype.Select_Element_Gear_All_Submenu  = element(by.css('ul.action-menu'));

    //BB_UserListRepo.prototype.Select_Xpath_PopUpMESSAGE = by.xpath('//*[@id="page-box"]/user-list/div/div/div/message-box/div/div'); //old
      BB_UserListRepo.prototype.Select_Xpath_PopUpMESSAGE = by.xpath(' //*[@id="page-box"]/user-list/div/div/message-box/div/div');

    BB_UserListRepo.prototype.Select_Element_PopUpMESSAGE = element(this.Select_Xpath_PopUpMESSAGE);
};
module.exports = new BB_UserListRepo();
