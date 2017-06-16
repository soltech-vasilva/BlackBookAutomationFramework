/**
 * Created by Vsilva on 1/1/17.
 */


var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_configuration = function BB_configuration () {

    //Components "ERROR MESSAGE DISPLAY"
    BB_configuration.prototype.BuildTestNumber = '194';
    BB_configuration.prototype.StopRunAtFail = true;   //false original
    BB_configuration.prototype.WaitTime = 20000;
    BB_configuration.prototype.ApplitoolsOn = true;
    BB_configuration.prototype.Path_mySteps = '/Users/visilva/WebstormProjects/BlackBookAutomationFramework/TestAutomation/e2e/features/step_definitions/my_steps.js';
    BB_configuration.prototype.Path_protractorConfig ='/Users/visilva/WebstormProjects/BlackBookAutomationFramework/TestAutomation/protractor-conf.js';
    ////////////////////
    // //windows XP and 7 lowest resolution
    // BB_configuration.prototype.width = 694;
    // BB_configuration.prototype.height=  494;

    // Test 1 on this resolution (windows 8-10 and Mac lowest resolution)
    // BB_configuration.prototype.width = 918;
    // BB_configuration.prototype.height=  662;

    // //this works on my mac computer
    // BB_configuration.prototype.width = 1024;
    // BB_configuration.prototype.height=  666;
    ////////////////////

    // // //my MAC computer max resolution
    // BB_configuration.prototype.width = 1338;
    // BB_configuration.prototype.height=  666;

    //Test 2 on this resolution (Mac max resolution)
    BB_configuration.prototype.width =  1814;
    BB_configuration.prototype.height= 974;

    // // //windows all version max resolution
    //BB_configuration.prototype.width = 1942;
    // BB_configuration.prototype.height=  1430;
};
module.exports = new BB_configuration ();
