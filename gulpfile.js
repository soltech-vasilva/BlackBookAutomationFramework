"use strict";

var gulp                = require('gulp');
var protractor          = require("gulp-protractor").protractor;
var exec                = require('child_process').exec;


gulp.task('webdriver', runCommand('webdriver-manager start'));
gulp.task('report', runCommand('node server-report'));
gulp.task('endtoend', ()=>
{
    return gulp.src([

    ])
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_Automation_real/TestAutomation/protractor-conf.js'

        }))
        .on('end', function(e)
        {
            console.log("Cucumber end to end is completed.");
        })
        .on('error', function (e) {
            console.error("Cucumber Task Error:", e);
        });
});
function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}


// git-r-done
gulp.task('default', ['endtoend']);
