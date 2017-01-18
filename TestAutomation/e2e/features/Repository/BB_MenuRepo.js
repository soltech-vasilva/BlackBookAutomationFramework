/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_MenuRepo = function BB_MenuRepo () {
    //Components Tab
   // BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.css('a[href="/role/list"]'));
    BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.linkText('Admin'));
    //Components Button
   // BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.css('div[style="background-image:url(\\'/assets/images/user.svg\\')"]'));
    BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.xpath('//*[@id="page-box"]/header/div[3]'));

    //Components SubMenu Button
    BB_MenuRepo.prototype.Select_Element_MyProfileSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[2]/a'));

    BB_MenuRepo.prototype.Select_Element_LogOutSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[3]/ul/li[1]/a'));
    BB_MenuRepo.prototype.Select_Element_UsersSubMenuButton = element(by.css('a[href="/user/list"]'));
};
module.exports = new BB_MenuRepo();