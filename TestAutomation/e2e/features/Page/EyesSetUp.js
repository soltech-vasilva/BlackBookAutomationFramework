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
var page = require ('../Page/Page_Objects');

var EyesSetUp = function EyesSetUp(){

    EyesSetUp.prototype.EyesInitialSetUp = function (eyes) {
        eyes.setForceFullPageScreenshot(true);
        eyes.setStitchMode(Eyes.StitchMode.CSS);
        //eyes.setMatchLevel('Layout2');
    };

    EyesSetUp.prototype.EyesSetBranchName = function (eyes) {
          eyes.setBranchName('BranchName BlackBook',1);
    };

    EyesSetUp.prototype.EyesSetBatch = function (eyes , currentOSName, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution) {
        //Left column name display  the number is the ID: 1
        eyes.setBatch('"BlackBook" '+ currentOSName+'  '+ currentBrowserName+ ':'+ currentBrowserVersion +' : ' + currentWidthTestResolution +'X' + currentHeightTestResolution, 1 );
    };

    EyesSetUp.prototype.EyesOpen_StartTestCase = function (eyes, currentWidthTestResolution, currentHeightTestResolution) {
        //dentro del batch (test case)
        eyes.open(browser, 'App Name: BlackBook' , 'Test Name: Simple BlackBook Test', {width: currentWidthTestResolution , height: currentHeightTestResolution});
    };

    EyesSetUp.prototype.EyesSetBaseline = function(eyes, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution){
        //dentro del test case (detalles)
        eyes.setBaselineName ('Baseline  '+currentBrowserName+':' + currentBrowserVersion +'  :  ' + currentWidthTestResolution +'x' + currentHeightTestResolution);
    };

    EyesSetUp.prototype.EyesClose_EndTestcase = function(eyes){

        if (protractorConfig.config.ApplitoolsOn == true) {
            console.log("EYE close");
            browser.driver.wait(eyes.close(false).then(function (testResults) {
                // request({
                //     uri: "https://soltech2:mnKfscqSMQ8C7jFfZR2Y@www.browserstack.com/automate/sessions/<session-id>.json",
                //     method: "PUT",
                //     form: {"status": "completed", "reason": ""}
                // });
                // console.log('testResults:'+ request);
            }));
        }
    };

    EyesSetUp.prototype.EyesCheckWindow = function (eyes, verifyScreenElementName , isBooleanApplitoolsOn ) {
        if (isBooleanApplitoolsOn == true) {
           // eyes.checkWindow(BB_editUserProfileRepo.EyesVerify_BB_Dashboard);
            page.executeSequence([eyes.checkWindow(verifyScreenElementName).then(()=>{ console.log("before sleep");}), browser.driver.sleep(2000).then(()=>{ console.log("after sleep");})]).then(( )=>{console.log("Capture:"+verifyScreenElementName)});
        }
    }
};
module.exports = new EyesSetUp();