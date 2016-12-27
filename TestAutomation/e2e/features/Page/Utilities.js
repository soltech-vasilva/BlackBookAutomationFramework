/**
 * Created by Vsilva on 12/19/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Utilities = function Utilities() {

    Utilities.prototype.ReplaceDoubleQuotesWithWhiteSpace = function (stringToReplace) {
        stringToReplace = stringToReplace.replace(/"/g, " ");
        return stringToReplace;
    };
};
module.exports = new Utilities();