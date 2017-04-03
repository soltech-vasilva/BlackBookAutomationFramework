/**
 * Created by Vsilva on 4/3/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_RolesListRepo = function BB_RolesListRepo () {
    BB_RolesListRepo.prototype.Select_Element_NewRoleButton  = element(by.css('button.button'));
};
module.exports = new BB_RolesListRepo();
