/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Eyes = require('eyes.protractor').Eyes;
var request = require("request");
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');

var EyesSetUp = function EyesSetUp(){

    EyesSetUp.prototype.EyesInitialSetUp = function (eyes) {
        eyes.setBranchName('BranchName BlackBook',1);
        eyes.setForceFullPageScreenshot(true);
        eyes.setStitchMode(Eyes.StitchMode.CSS);
        //eyes.setMatchLevel('Layout2');
    };

    EyesSetUp.prototype.EyesSetBaseline = function(eyes, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution){
        eyes.setBaselineName ('Baseline  '+currentBrowserName+':' + currentBrowserVersion +'  :  ' + currentWidthTestResolution +'x' + currentHeightTestResolution);
    };

    EyesSetUp.prototype.EyesSetBatch = function (eyes , currentOSName, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution) {
        eyes.setBatch('"BlackBOOk" '+ currentOSName+'  '+ currentBrowserName+ ':'+ currentBrowserVersion +' : ' + currentWidthTestResolution +'X' + currentHeightTestResolution );
    };

    EyesSetUp.prototype.EyesOpen_StartTestCase = function (eyes, currentWidthTestResolution, currentHeightTestResolution) {
        eyes.open(browser, 'App Name: BlackBook' , 'Test Name: Simple BlackBook Test', {width: currentWidthTestResolution , height: currentHeightTestResolution});
    };

    EyesSetUp.prototype.EyesClose_EndTestcase = function(eyes){
        //eyes.close();
        if (protractorConfig.config.ApplitoolsOn == true) {
            eyes.close(false).then(function (testResults) {
                request({
                    uri: "https://victorsilva8:xCzjDLuovykUS3dzL6tK@www.browserstack.com/automate/sessions/<session-id>.json",
                    method: "PUT",
                    form: {"status": "completed", "reason": ""}
                });
                console.log(testResults);
            });
        }
    };

    EyesSetUp.prototype.EyesCheckWindow = function (eyes, verifyScreenElementName , isBooleanApplitoolsOn ) {
        if (isBooleanApplitoolsOn == true) {
           // eyes.checkWindow(BB_editUserProfileRepo.EyesVerify_BB_Dashboard);
            eyes.checkWindow(verifyScreenElementName);
        }
    }
};
module.exports = new EyesSetUp();