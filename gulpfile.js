"use strict";

var gulp                = require('gulp');
var protractor          = require("gulp-protractor").protractor;
var exec                = require('child_process').exec;
///////////////////////

// const cucumber = require('gulp-cucumber');
// const BrowserStackTunnel = require('browserstacktunnel-wrapper');
//
// var tunnel;
// function startTunnel(options) {
//     return new Promise((resolve, reject) => {
//         tunnel = new BrowserStackTunnel(options);
//
//         tunnel.start(function(error) {
//             error ? reject(error) : resolve();
//         });
//     });
// }
//
// function stopTunnel(error) {
//     return new Promise((resolve, reject) => {
//         function resolveOrReject() {
//             error ? reject(error) : resolve();
//         }
//
//         tunnel ? tunnel.stop(resolveOrReject) : resolveOrReject();
//     });
// }
//
// function createCucumberPromise(src, options) {
//     return function() {
//         return new Promise((resolve, reject) => {
//             gulp.src(src)
//                 .pipe(cucumber({
//                     options
//                 }))
//                 .on('end', resolve)
//                 .on('error', reject);
//         });
//     }
// }
//
// gulp.task('cucumber', () => {
//     return startTunnel({
//         key: 'mnKfscqSMQ8C7jFfZR2Y'
//     })
//         .then(createCucumberPromise('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/e2e/features/TestCases/EditUserProfile.feature', {
//             // format: 'json:output.json'
//             // tags: '@wip'
//         }))
//         .then(stopTunnel, stopTunnel);
// });

/////////////////////
gulp.task('webdriver', runCommand('webdriver-manager start'));
gulp.task('report', runCommand('node server-report'));


gulp.task('Chrome_AddUser',  ()=>
{
    return new Promise((resolve, reject) => {
        gulp.src([])
        //Chrome
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Chrome_AddUser.js'
        }))
        .on('end', resolve)
        .on('error', resolve);
        });
});

gulp.task('Chrome_EditUserProfile', ['Chrome_AddUser'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //Chrome
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Chrome_EditUserProfile.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Chrome_UsersList', ['Chrome_EditUserProfile'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //Chrome
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Chrome_UsersList.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Chrome_Login',['Chrome_UsersList'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //Chrome
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Chrome_Login.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Firefox_AddUser', ['Chrome_Login'], ()=>
{
    return new Promise((resolve, reject) => {
        gulp.src([])
        //Firefox
            .pipe(protractor({
                configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Firefox_AddUser.js'
            }))
            .on('end', resolve)
            .on('error', resolve);
    });
});

gulp.task('Firefox_EditUserProfile', ['Firefox_AddUser'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //Firefox
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Firefox_EditUserProfile.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Firefox_UsersList',['Firefox_EditUserProfile'], ()=>
{
    return new Promise((resolve, reject) => {
        gulp.src([])
        //Firefox
            .pipe(protractor({
                configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Firefox_UsersList.js'
            }))
            .on('end', resolve)
            .on('error', resolve);
    });
});

gulp.task('Firefox_Login', ['Firefox_UsersList'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //Firefox
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Firefox_Login.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('IE_AddUser', ['Firefox_Login'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //IE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-IE_AddUser.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('IE_EditUserProfile',['IE_AddUser'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //IE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-IE_EditUserProfile.js'
        }))
        .on('end', resolve)
        .on('error', resolve);
});
});

gulp.task('IE_UsersList', ['IE_EditUserProfile'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //IE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-IE_UsersList.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('IE_Login', ['IE_UsersList'],()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //IE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-IE_Login.js'
        }))
        .on('end', resolve)
        .on('error', resolve);
});
});

gulp.task('Edge_AddUser',()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
    //EDGE
    .pipe(protractor({
        configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Edge_AddUser.js'
    }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Edge_EditUserProfile',['Edge_AddUser'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //EDGE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Edge_EditUserProfile.js'
        }))
        .on('end', resolve)
        .on('error', resolve);
});
});

gulp.task('Edge_UsersList',['Edge_EditUserProfile'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //EDGE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Edge_UsersList.js'
        }))
         .on('end', resolve)
         .on('error', resolve);
    });
});

gulp.task('Edge_Login',['Edge_UsersList'], ()=>
{
    return new Promise((resolve, reject) => {
     gulp.src([])
        //EDGE
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-Edge_Login.js'
        }))
        .on('end', resolve)
        .on('error', resolve);
});
});

 gulp.task('default', ['Chrome_AddUser','Chrome_EditUserProfile', 'Chrome_UsersList','Chrome_Login']);
// gulp.task('default', ['Firefox_AddUser','Firefox_EditUserProfile','Firefox_UsersList','Firefox_Login']);
// gulp.task('default', ['IE_AddUser','IE_EditUserProfile','IE_UsersList','IE_Login']);
//gulp.task('default', ['Edge_AddUser','Edge_EditUserProfile','Edge_UsersList','Edge_Login']);

// git-r-done
// gulp.task('default', [/*'webdriver','report',*/
//     'Chrome_AddUser','Chrome_EditUserProfile', 'Chrome_UsersList','Chrome_Login',
//     'Firefox_AddUser','Firefox_EditUserProfile','Firefox_UsersList','Firefox_Login',
//     'IE_AddUser','IE_EditUserProfile','IE_UsersList','IE_Login',
//     /*'Edge_AddUser','Edge_EditUserProfile','Edge_UsersList','Edge_Login'*/]);

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}



