/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_MenuRepo = function BB_MenuRepo () {

    //Components BUTTON
    // BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.xpath('//*[@id="page-box"]/header/div[2]')); //todo see if iot works it change to 2
    BB_MenuRepo.prototype.Select_Element_ProfileButton = element(by.xpath('//*[@id="parentProfileLink"]/img')); //todo see if iot works it change to 2

    //Components SubMenu BUTTON for Profile
    // BB_MenuRepo.prototype.Select_Element_MyProfileSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[2]/ul/li[2]/a'));//todo see if iot works it change to a (it might have issues user 1)
    BB_MenuRepo.prototype.Select_Element_MyProfileSubMenuButton = element(by.id('profileLink'));
    // BB_MenuRepo.prototype.Select_Element_LogOutSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/div[2]/ul/li[1]/a'));
    BB_MenuRepo.prototype.Select_Element_LogOutSubMenuButton = element(by.xpath('//*[@id="logoutLink"]/span'));

    //Components TAB
    //BB_MenuRepo.prototype.Select_Element_AdminTab = element.all(by.css('span.nav-item-link')).get(0); //todo code change testting this
    //*[@id="page-box"]/header/ul/li[1]/a
    //*[@id="page-box"]/header/ul/li[2]/span
    //*[@id="page-box"]/header/ul/li[3]/span
    //BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/span'));
    //BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.xpath('//*[@id="adminNavMenu"]/div/span'));
     BB_MenuRepo.prototype.Select_Element_AdminTab = element(by.id('adminNavMenu'));

    BB_MenuRepo.prototype.Select_Element_SegmentTab = element(by.xpath('//*[@id="page-box"]/header/ul/li[3]/span'));

    //     var ele = '';
    //
    //     return element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/span')).getText().then((text) => {
    //         console.log('//*[@id="page-box"]/header/ul/li[2]/span');
    //         if (text == 'Segment') {
    //             console.log('//*[@id="page-box"]/header/ul/li[2]/span');
    //             return ele = '//*[@id="page-box"]/header/ul/li[2]/span';
    //         }
    //         else {
    //             element(by.xpath('//*[@id="page-box"]/header/ul/li[3]/span')).getText().then((text) => {
    //                 console.log('//*[@id="page-box"]/header/ul/li[3]/span');
    //                 if (text == 'Segment') {
    //                     console.log('//*[@id="page-box"]/header/ul/li[3]/span');
    //                     return ele = '//*[@id="page-box"]/header/ul/li[3]/span';
    //                 }
    //             });
    //         }
    //     });
    // };

    // BB_MenuRepo.prototype.Select_Element_HomeTab = element(by.linkText('Home'));
    BB_MenuRepo.prototype.Select_Element_HomeTab = element(by.id('dashboardLink'));

    //Components SubMenu Button for Admin Tab
    // BB_MenuRepo.prototype.Select_Element_UsersSubMenuButton = element(by.css('a[href="/user/list"]'));
    BB_MenuRepo.prototype.Select_Element_UsersSubMenuButton = element(by.id('userListLink'));
    BB_MenuRepo.prototype.Select_Element_RolesSubMenuButton = element(by.xpath('//*[@id="roleListLink"]'));
    //BB_MenuRepo.prototype.Select_Element_RolesSubMenuButton = element(by.id('roleListLink'));
    //BB_MenuRepo.prototype.Select_Element_RolesSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/ul/li[1]/a'));
    // BB_MenuRepo.prototype.Select_Element_SettingsSubMenuButton = element(by.xpath('//*[@id="page-box"]/header/ul/li[2]/ul/li[3]/a'));
    BB_MenuRepo.prototype.Select_Element_SettingsSubMenuButton = element(by.id('settingsLink'));
};
module.exports = new BB_MenuRepo();