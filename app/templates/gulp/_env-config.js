'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var $ = require('gulp-load-plugins')();

var environment = argv.env || 'default';

gulp.task('env-config', function () {
  return gulp.src('src/app/env-configs/config-' + environment + '.json')
    .pipe($.ngConstant({
      name: '<%- appName %>',
      deps: false,
      dest: 'EnvConstants.config.js'
    }))
    .pipe(gulp.dest('src/app'));
});
