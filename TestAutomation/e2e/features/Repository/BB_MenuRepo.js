/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_MenuRepo = function BB_MenuRepo () {

    BB_MenuRepo.prototype.Select_Element_MainLogo = element(by.xpath('//*[@id="page-box"]/header/div[1]'));
    //Components Tab
    // BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.linkText('Admin')); //EDGE, Chrome works
    BB_MenuRepo.prototype.Select_Element_AdminTab = element.all(by.css('span.nav-item-link')).get(0); //todo code change testting this

    //Components SubMenu Button for Admin Tab
    BB_MenuRepo.prototype.Select_Element_UsersSubMenuButton = element(by.css('a[href="/user/list"]'));
    BB_MenuRepo.prototype.Select_Element_RolesSubMenuButton = element(by.css('a[href="/role/list"]'));

    //Components Button
   //BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.xpath('//*[@id="page-box"]/header/div[3]'));
    BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.xpath('//*[@id="page-box"]/header/div[2]')); //todo see if iot works it change to 2

    //Components SubMenu Button for Profile
    //BB_MenuRepo.prototype.Select_Element_MyProfileSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[2]'));
    BB_MenuRepo.prototype.Select_Element_MyProfileSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[2]/ul/li[2]/a'));//todo see if iot works it change to a (it might have issues user 1)

    //BB_MenuRepo.prototype.Select_Element_LogOutSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[1]'));
    BB_MenuRepo.prototype.Select_Element_LogOutSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[2]/ul/li[1]/a'));

};
module.exports = new BB_MenuRepo();