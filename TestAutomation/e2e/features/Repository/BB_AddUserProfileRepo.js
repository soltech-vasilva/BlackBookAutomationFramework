/**
 * Created by Vsilva on 1/1/17.
 */


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_AddUserProfileRepo = function BB_AddUserProfileRepo () {

    //Components "ERROR DISPLAY REQUIRE"
    BB_AddUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_NewPassword =  by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[1]/div/error-msg/span');
    BB_AddUserProfileRepo.prototype.Select_xpath_ERRORMESSAGE_ConfirmNewPassword = by.xpath('//*[@id="page-box"]/user-profile/div/div/div[1]/div[2]/div[1]/div[7]/div[2]/div/error-msg/span');

    BB_AddUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_NewPassword = element( this.Select_xpath_ERRORMESSAGE_NewPassword);
    BB_AddUserProfileRepo.prototype.Select_Element_ERRORMESSAGE_ConfirmNewPassword = element( this.Select_xpath_ERRORMESSAGE_ConfirmNewPassword);
};
module.exports = new BB_AddUserProfileRepo ();
