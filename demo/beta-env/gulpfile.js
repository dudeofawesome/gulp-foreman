var gulp = require('gulp');
var foreman = require('../../index.js');

gulp.task('default', function (argument) {
  foreman({
    env: 'beta.env'
    // env: ['beta.env']
  });
});