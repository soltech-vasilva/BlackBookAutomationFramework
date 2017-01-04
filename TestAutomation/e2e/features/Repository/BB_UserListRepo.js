/**
 * Created by Vsilva on 1/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_UserListRepo = function BB_UserListRepo () {

    //Components Button
    BB_UserListRepo.prototype.Select_Element_NewUserButton  = element(by.css('button.button'));

};
module.exports = new BB_UserListRepo();
