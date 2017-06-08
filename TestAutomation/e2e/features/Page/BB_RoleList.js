/**
 * Created by Vsilva on 4/2/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_roleListRepo = require('../Repository/BB_RoleListRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var page = require ('../Page/Page_Objects');

var BB_RoleList = function BB_RoleList() {

    BB_RoleList.prototype.numberofUsers = 0;

    BB_RoleList.prototype.Click_NewRole_Button = function () {
        return new Promise((success, failure)=> {
            page.clickButton(BB_roleListRepo.Select_Element_NewRoleButton, protractorConfig.config.WaitTime, success);
        });
    };

    BB_RoleList.prototype.Click_Gear_View_Submenu = function (rowNumber) {
        return new Promise((success, failure) => {
            page.clickButton(BB_roleListRepo.Select_Element_Gear_View_Submenu(rowNumber),protractorConfig.config.WaitTime,success);
        });
    };

    BB_RoleList.prototype.Store_NumberOfUsersColumn = function (RoleName) {

        var element = '';
        return new Promise((success, failure) => {
            switch (RoleName.toLowerCase()) {
                case 'rolename7':
                    page.executeSequence([page.waitForElementTobePresent(BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7), protractorConfig.config.WaitTime),
                        element = BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7)]).then(() => {
                    });
                    break;

                case 'administration':
                    page.executeSequence([page.waitForElementTobePresent(BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(1), protractorConfig.config.WaitTime),
                        element = BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(1)]).then(() => {
                    });
                    break;

                default:
                    console.log(RoleName + ' : is not part of switch statement in Store_NumberOfUsersColumn function.');
                    failure();
            }

            page.executeSequence([element.getText().then((currentValue) => {
                            console.log('Store value:'+currentValue);
                            this.numberofUsers = currentValue;
                            success();
                        })]).then(()=>{});
        });
    };

    BB_RoleList.prototype.Verify_NumberOfUsersColumn_Increase = function (RoleName) {
        var element = '';
        return new Promise((success, failure) => {
            switch (RoleName.toLowerCase()) {
                case 'rolename7':
                    page.executeSequence([page.waitForElementTobePresent(BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7), protractorConfig.config.WaitTime),
                        element = BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(7)]).then(() => {
                    });
                    break;

                case 'administration':
                    page.executeSequence([page.waitForElementTobePresent(BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(1), protractorConfig.config.WaitTime),
                        element = BB_roleListRepo.Select_Element_NumberOfUsersColumn.get(1)]).then(() => {
                    });
                    break;

                default:
                    console.log(RoleName + ' : is not part of switch statement in Verify_NumberOfUsersColumn_Increase function.');
                    failure();
            }

            page.executeSequence([element.getText().then((currentValue) => {
                console.log("currentValue:"+currentValue);
                this.numberofUsers++;
                console.log(this.numberofUsers);

                if (this.numberofUsers === currentValue) {
                    success();
                }
                else {
                    console.log('Did not see any change number of users.');
                    failure();
                }
            })]).then(() => {
            });
        });
    };
};
module.exports = new BB_RoleList();