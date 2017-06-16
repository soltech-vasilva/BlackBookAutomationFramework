/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var protractorConfigfile = require('../Repository/BB_configuration.js');
var protractorConfig = require (protractorConfigfile.Path_protractorConfig);
var eyesSetUp = require ('../Page/EyesSetUp.js');

var CaptureBrowserCapabilities = function CaptureBrowserCapabilities()
{
    CaptureBrowserCapabilities.prototype.currentBrowserName = '';
    CaptureBrowserCapabilities.prototype.currentBrowserVersion = '';
    CaptureBrowserCapabilities.prototype.currentOSName = '';
    CaptureBrowserCapabilities.prototype.currentOSVersion = '';
    CaptureBrowserCapabilities.prototype.currentWidthTestResolution = '';
    CaptureBrowserCapabilities.prototype.currentHeightTestResolution = '';
    //
    // CaptureBrowserCapabilities.prototype.captureCurrentBrowser = function (BrowserCompare, element, eaqualOrNot ) {
    //
    //     var name = '';
    //
    //    return browser.wait (  browser.getCapabilities().then(function (capability) {
    //
    //         try {
    //             name = protractorConfig.config.capabilities.browserName;
    //         }
    //         catch (e) {
    //             name = capability.get('browserName');
    //         }
    //
    //         console.log(name);
    //
    //         if (eaqualOrNot == true) {
    //             if (name.toLowerCase() == BrowserCompare) {
    //                 browser.actions().mouseMove(element).perform();
    //                 console.log("FOUNT IT SAFARI");
    //             }
    //         }
    //         else {
    //             if (name.toLowerCase() != BrowserCompare) {
    //                 console.log("NOT: SAFARI");
    //             }
    //         }
    //
    //         return name;
    //     }));
    // };

    CaptureBrowserCapabilities.prototype.captureCurrentBrowserCapabilities = function (eyes, scenario) {

        browser.getCapabilities().then(function (capability) {

            try {
                this.currentBrowserName = protractorConfig.config.capabilities.browserName;
                this.currentOSName = capability.get('platform');
            }
            catch (e) {
                this.currentBrowserName = capability.get('browserName');
                this.currentOSVersion = capability.get('os_version');
                this.currentOSName = capability.get('os');

                if (this.currentOSName === undefined) {
                    this.currentOSName = capability.get('platform');
                    this.currentOSName = '';
                }
            }

            //hace crash aqui (browserstack ) deje el de ariba
            // if (typeof protractorConfig.config.capabilities.browserName  == "undefined")
            // {
            //     this.currentBrowserName = capability.get('browserName');
            //     this.currentOSVersion = capability.get('os_version');
            //     this.currentOSName = capability.get('os');
            //
            //     if (this.currentOSName === undefined)
            //     {
            //         this.currentOSName = capability.get('platform');
            //         this.currentOSName ='';
            //     }
            // }
            // else {
            //     this.currentBrowserName = protractorConfig.config.capabilities.browserName;
            //     this.currentOSName = capability.get('platform');
            // }

            if (this.currentOSVersion === undefined) {
                this.currentOSVersion = '';
            }
            else {
                this.currentOSVersion = '(' + this.currentOSVersion + ')';
            }

            this.currentBrowserVersion = capability.get('version');
            this.currentWidthTestResolution = protractorConfig.config.width;
            this.currentHeightTestResolution = protractorConfig.config.height;
            // console.log(this.currentBrowserName);
            // console.log(this.currentBrowserVersion);
            // console.log(this.currentOSName);
            // console.log(this.currentWidthTestResolution);
            // console.log(this.currentHeightTestResolution);
            // console.log(this.currentOSVersion);

            if (protractorConfig.config.ApplitoolsOn === true) {
                console.log('START EYES');
                eyesSetUp.EyesInitialSetUp(eyes);
                eyesSetUp.EyesSetBranchName(eyes);
                eyesSetUp.EyesSetBatch(eyes, this.currentOSName + this.currentOSVersion, this.currentBrowserName, this.currentBrowserVersion, this.currentWidthTestResolution, this.currentHeightTestResolution);
                eyesSetUp.EyesOpen_StartTestCase(eyes, this.currentWidthTestResolution, this.currentHeightTestResolution, scenario);
                eyesSetUp.EyesSetBaseline(eyes, this.currentBrowserName, this.currentBrowserVersion, this.currentWidthTestResolution, this.currentHeightTestResolution);
            }
        });
    };
};
module.exports = new CaptureBrowserCapabilities();
