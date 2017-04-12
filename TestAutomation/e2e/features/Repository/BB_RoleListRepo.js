/**
 * Created by Vsilva on 4/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_RolesListRepo = function BB_RolesListRepo () {

    //Components BUTTON
    BB_RolesListRepo.prototype.Select_Element_NewRoleButton  = element(by.xpath('//*[@id="page-box"]/role-list/div/div/div/div[1]/button'));
    BB_RolesListRepo.prototype.Select_Element_Gear_View_Submenu =   function(rowNumber){
        this.rowNumber = rowNumber;
        return element(by.xpath('//*[@id="center"]/div/div[4]/div[3]/div/div/div['+this.rowNumber.toString()+']/div[3]/action-icon/div/div/ul/li[1]/div'));
    };

    //Components OTHERS
    BB_RolesListRepo.prototype.Select_Element_NumberOfUsersColumn  = element.all(by.css('div[colid="users"]'));
};
module.exports = new BB_RolesListRepo();
