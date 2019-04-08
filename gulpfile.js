const gulp = require('gulp');
const ts = require('gulp-typescript');

// include the tsconfig.json
const tsProject = ts.createProject('tsconfig.json');

gulp.task("typescript", function() {
    return tsProject.src()
        .pipe(ts(tsProject))
        .pipe(gulp.dest(""));
});

// watch task
gulp.task("watch", function() {
    gulp.watch("*.ts", ["typescript"]);
});

// default task
gulp.task("default", ["watch"]);