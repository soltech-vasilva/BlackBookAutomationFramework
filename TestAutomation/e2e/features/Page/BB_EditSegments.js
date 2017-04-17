/**
 * Created by Vsilva on 4/14/17.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var utilities = require('../Page/Utilities.js');
var page = require ('../Page/Page_Objects');
var BB_editUserProfile = require('../Page/BB_EditUserProfile.js');
var BB_editRolesRepo =  require('../Repository/BB_EditRolesRepo.js');
var BB_loginRepo = require('../Repository/BB_LoginRepo.js');

var BB_EditSegments = function BB_EditSegments() {

    BB_EditSegments.prototype.SegmentName = '';

    BB_EditSegments.prototype.Enter_SegmentName_inForm_SegmentEditor = function (segmentName) {
        return new Promise((success, failure) => {
            page.executeSequence([this.SegmentName = utilities.ReplaceDoubleQuotesWithWhiteSpace(segmentName.toString()),
                page.fill(element(by.xpath('//*[@id="page-box"]/create-segment/div/div/div/div[2]/div/div[1]/input')), this.SegmentName, protractorConfig.config.WaitTime, element(by.xpath('//*[@id="page-box"]/create-segment/div/div/h1/span')), success)
            ]).then(() => {
            });
        });
    }
};
module.exports = new BB_EditSegments();