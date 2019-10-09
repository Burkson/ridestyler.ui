var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

var paths = {
    source: './src/*.scss',
    doc: './docs/src/scss/*.scss'
};

gulp.task('watch', function () {
    gulp.watch('./**/*.scss', gulp.series('build'));
    gulp.watch('./**/*.scss', gulp.series('docs'));
    gulp.watch('./**/*.pug', gulp.series('docs'));
});

gulp.task('build', function () {
    return gulp.src(paths.source)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist'))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

var docTasks = {
    scssDocs() {
        return gulp.src(paths.doc)
            .pipe(sass({ outputStyle: 'compact', precision: 10 })
                .on('error', sass.logError)
            )
            .pipe(autoprefixer())
            .pipe(csscomb())
            .pipe(gulp.dest('./docs/dist'))
            .pipe(cleancss())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./docs/dist'))
    },
    scssSource() {
        return gulp.src(paths.source)
            .pipe(sass({ outputStyle: 'compact', precision: 10 })
                .on('error', sass.logError)
            )
            .pipe(autoprefixer())
            .pipe(csscomb())
            .pipe(gulp.dest('./docs/dist'))
            .pipe(cleancss())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./docs/dist'))
    },
    html() {
        return gulp.src('docs/src/**/!(_)*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('./docs/'))
    }
};

gulp.task('docs', gulp.parallel(
    docTasks.html,
    docTasks.scssDocs,
    docTasks.scssSource
));

gulp.task('default', gulp.series('build'))