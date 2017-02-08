//var paths = require('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/build/paths');
//var browserstack = require('browserstack-local');
//var paths = require('build/paths');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var dateFormat = require('dateformat');
exports.config = {

    //specs: [
    //'e2e/features/TestCases/*.feature'
    // ],

    //Turn off applitool
    'ApplitoolsOn': false,

    //Running Test Cases in specific order.
    specs: [
        //Browserstack can only run for 2 hours long. Then it will stop
        //add test cases here below:
        //'e2e/features/TestCases/AddUser_part1.feature'//,
        'e2e/features/TestCases/AddUser_part2.feature'//,
    ],


    // suites: {
    //     smoke:  'e2e/features/TestCases/OpenWebsite1.feature'//,
    // },

    //BrowserStack
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    //Settings for the local machine (Run "webdriver-manager start" from any directory  + calls inside capabilities)
    //Selenium
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    //Appium
    //seleniumAddress: 'http://localhost:4733/wd/hub',


    ////////////////////
    // //windows XP and 7 lowest resolution
    // 'width': 694,
    // 'height': 494,

    // Test 1 on this resolution (windows 8-10 and Mac lowest resolution)
    // 'width': 918,
    // 'height': 662,

    // //this works on my mac computer
    // 'width': 1024,
    // 'height': 666,
    ////////////////////

    // // //my MAC computer max resolution
    // 'width': 1338,
    // 'height': 666,

    // //Test 2 on this resolution (Mac max resolution)
    // 'width': 1814,
    // 'height': 974,

    // //windows all version max resolution
    'width': 1942,
    'height': 1430,

    'commonCapabilities': {
         //Label
        'build':''+protractorConfig.config.BuildTestNumber+'__________________ Run : EDGE_________________ Test : Add User Part2_________ ' + dateFormat(new Date(), "mmmm dS, yyyy, h:MM TT"),
        'project': 'Black Book',
        'name': 'Add User Part 2',

        'browserstack.user': 'soltech2',
        'browserstack.key': 'mnKfscqSMQ8C7jFfZR2Y',
        //'browserstack.local' : 'true',
        // 'acceptSslCerts': true,
       // 'browserstack.selenium_version' : '3.0.1',

        //Screenshot
         'browserstack.debug': 'true',

         //Video recording
         'browserstack.video': 'true'//,
    },

    //Browserstack multiple browsers at a time testing
      multiCapabilities: [
            // {
            // ////////////////////////////////////////////// Windows 10 IE 11.0 1920x1200 ///////////////////
            // //Browser Type
            // 'browserName' : 'IE',
            // 'browser_version' : '11.0',
            // 'os' : 'Windows',
            // 'os_version' : '10',
            // 'resolution' : '1920x1200'
            // }
          //   ,
          {
              ////////////////////////////////////////////// Windows 10 Edge 13.0 1920x1200 ///////////////////
              //Browser Type
              'os': 'Windows',
              'os_version': '10',
              'browserName': 'Edge',
              'browser_version': '13.0',
              'resolution': '1920x1200'
          }
          //   ,
          // {
          //     ////////////////////////////////////////////// Windows 10 Chrome 55.0  1920x1200 ///////////////////
          //     // Browser Type
          //     'os': 'Windows',
          //     'os_version': '10',
          //     'browserName': 'Chrome',
          //     'browser_version': '55.0',
          //     'resolution': '1920x1200'//,
          //
          //     // 'chromeOptions': {
          //     //     'excludeSwitches': ["disable-popup-blocking"]
          //     // }
          //
          //     // 'chromeOptions': {
          //     //     'args': ["--disable-popup-blocking"]
          //     // }
          // }
          // ,
          // {
          //     //////////////////////////////////////////////  Windows 10 Firefox 47.0  1920x1200 ///////////////////
          //     // Browser Type
          //     'os': 'Windows',
          //     'os_version': '10',
          //     'browserName': 'Firefox',
          //     'browser_version': '47.0',
          //     'resolution': '1920x1200'
          // }
          // ,
          // {
          //     ////////////////////////////////////////////// MAC SIERRA Safari 10.0  1920x1080 ///////////////////
          //     // Browser Type
          //     'os': 'OS X',
          //     'os_version': 'Sierra',
          //     'browserName': 'Safari',
          //     'browser_version': '10.0',
          //     'resolution': '1920x1080' //,
          //     //'browserstack.safari.enablePopups': false
          // }

          /////////////NOT NEED FOR MOMENT/////
          //  ,
          //   {
          //   ////////////////////////////////////////////// DOES NOT WORK Windows 7 IE 10.0  1920x1200 ///////////////////
          //   // Browser Type
          //   'os': 'Windows',
          //   'os_version': '7',
          //   'browserName': 'IE',
          //   'browser_version': '10.0',
          //   'resolution': '1920x1200'
          //   }
          //  ,
          //   {
          //   ////////////////////////////////////////////// Windows 7 IE 11.0  1920x1200 ///////////////////
          //   // Browser Type
          //   'os': 'Windows',
          //   'os_version': '7',
          //   'browserName': 'IE',
          //   'browser_version': '11.0',
          //   'resolution': '1920x1200'
          //   }
          // ,
          // {
          //   ////////////////////////////////////////////// Windows 7 Chrome 54.0  1920x1200 ///////////////////
          //    // Browser Type
          //    'os': 'Windows',
          //    'os_version': '7',
          //    'browserName': 'Chrome',
          //    'browser_version': '54.0',
          //    'resolution': '1920x1200'//,
          //
          //   // 'chromeOptions': {
          //   //     'excludeSwitches': ["disable-popup-blocking"]
          //   // }
          //
          //   // 'chromeOptions': {
          //   //     'args': ["--disable-popup-blocking"]
          //   // }
          //   }
          // ,
          // {
          //     ////////////////////////////////////////////// Windows 7 FireFox 46.0  1920x1200 ///////////////////
          //     //Browser Type
          //     'os': 'Windows',
          //     'os_version': '7',
          //     'browserName': 'Firefox',
          //     'browser_version': '46.0',
          //     'resolution': '1920x1200'
          // }

    ],

    // capabilities: {
    // //46.0b9
    // //'browserName': 'firefox'
    // //53.0.2785.89
    // 'browserName': 'chrome'
    //   //  'browserName': 'safari'//,
    // //     'acceptSslCerts': true,
    //     // 'mode' : 'proxy'
    //
    // },

    //Then update config file and set the browserstack.local capability to true.
    //Code to start browserstack local before start of test
    // beforeLaunch: function(){
    //     console.log("Connecting local");
    //     return new Promise(function(resolve, reject){
    //         exports.bs_local = new browserstack.Local();
    //         exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
    //             if (error) return reject(error);
    //             console.log('Connected. Now testing...');
    //
    //             resolve();
    //         });
    //     });
    // },
    //
    // // Code to stop browserstack local after end of test
    // afterLaunch: function(){
    //     return new Promise(function(resolve, reject){
    //         exports.bs_local.stop(resolve);
    //     });
    // },

    //directConnect: true, //Protractor can test directly against Chrome and Firefox without using a Selenium Server




    //REAL // path relative to the current config file
     frameworkPath: require.resolve('protractor-cucumber-framework'),
    // framework: 'cucumber',

    //set to "custom" instead of cucumber.
     framework: 'custom',


    //relevant cucumber command line options
    cucumberOpts: {
        keepAlive: true,
        //format: "summary", //simple format


        //require: [paths.distFiles, paths.support],
        // require: ['/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/support/JsonOutputHook.js'],

        require: ['/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/e2e/features/step_definitions/my_steps.js' ],

        // tags: false,
        //tags: ' @TestCases_C-7',

         //format: 'pretty',
        //format: 'json' ,
         format: 'json:./src/cucumber_report.json',

        //format: 'progress',
        //format: 'json',
        //format: 'summary',

        //  profile: false, //false  it still works on true
        profile: false,
        'no-source': true,
        //require: ['TestAutomation/e2e/features/step_definitions/my_steps.js', paths.support],

        //testing new stuff
        // backtrace: true, // <boolean> show full bacwebdriver-manager updatektrace for errors
        // dryRun: false,  // <boolean> invoke formatters without executing steps
        // failFast: false , // <boolean> abort the run on first failure
        // colors: true,       // <boolean> disable colors in formatter output
        // snippets: true ,     // <boolean> hide step definition snippets for pending steps
        // source: true,       // <boolean> hide source URIs
        // strict: true,      // <boolean> fail if there are any undefined or pending steps
        // ignoreUndefinedDefinitions: true // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    // cucumberOpts: {
    //    // require:'/Users/Vsilva/Desktop/Black Book/TestAutomation/e2e/features/UserStoriesSteps_Cucumber/*_steps.js',        // <string[]> (file/dir) require files before executing features
    //     backtrace: true,   // <boolean> show full bacwebdriver-manager updatektrace for errors
    //    // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    //     dryRun: false,      // <boolean> invoke formatters without executing steps
    //     failFast: false,    // <boolean> abort the run on first failure
    //     format: 'pretty', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //     colors: true,       // <boolean> disable colors in formatter output
    //     snippets: false,     // <boolean> hide step definition snippets for pending steps
    //     source: false,       // <boolean> hide source URIs
    //    // profile: [],        // <string[]> (name) specify the profile to use
    //     strict: true,      // <boolean> fail if there are any undefined or pending steps
    //    // tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    //     timeout: 20000,      // <number> timeout for step definitions
    //     ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
    // }
    // ,
    //

    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    useAllAngular2AppRoots: true
    // rootElement: '.my-app'
};

// Code to support common capabilities
exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});