/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_userListRepo = require('../Repository/BB_userListRepo.js');

var BB_UserList = function BB_UserList() {

    BB_UserList.prototype.Click_NewUser = function () {
        browser.wait(protractor.ExpectedConditions.presenceOf(BB_userListRepo.Select_Element_NewUserButton), 10000);
        return new Promise((success, failure)=> {
            BB_userListRepo.Select_Element_NewUserButton.click().then(()=> {
                success();
            });
        });
    };
};
module.exports = new BB_UserList();