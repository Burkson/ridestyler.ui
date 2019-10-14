var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var merge = require('merge-stream');
var replace = require('gulp-replace');

var paths = {
    source: './src/*.scss',
    variables: './src/_variables.scss',
    doc: './docs/src/scss/*.scss'
};

var distPaths = {
    source: './dist',
    docs: './docs'
};

var libraryFileName = 'rsui';
var version = require('./package.json').version;

gulp.task('watch', function () {
    gulp.watch(paths.source, gulp.parallel('scss'));
    gulp.watch(paths.variables, gulp.series(docTasks.scssDocs));
    gulp.watch(paths.doc, gulp.series(docTasks.scssDocs));
    gulp.watch('./**/*.pug', gulp.series(docTasks.html));
});

function buildSCSS() {
    return gulp.src(paths.source)
        .pipe(sass({ outputStyle: 'compact', precision: 10 })
            .on('error', sass.logError)
        )
        .pipe(replaceTokens())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(rename(function (path) {
            if (path.basename === 'index') path.basename = libraryFileName;
            else path.basename = libraryFileName + '-' + path.basename;
        }))
        .pipe(gulp.dest(distPaths.source))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }));
}
function replaceTokens() {
    return replace('{PACKAGE_VERSION}', version);
}

function sourceStream() {
    return merge(buildSCSS(), gulp.src('./src/fonts/**', {
        base: './src'
    }));
}

gulp.task('scss', gulp.series(
    function buildSCSSWithFonts () {
        return sourceStream().pipe(gulp.dest(distPaths.source));
    }, 
    function copyToDocs() {
        return gulp.src(distPaths.source + '/**', {
            base: distPaths.source
        }).pipe(gulp.dest(distPaths.docs + '/dist'));
    }
));

var docTasks = {
    scssDocs() {
        return gulp.src(paths.doc)
            .pipe(sass({ outputStyle: 'compact', precision: 10 })
                .on('error', sass.logError)
            )
            .pipe(replaceTokens())
            .pipe(autoprefixer())
            .pipe(csscomb())
            .pipe(gulp.dest(distPaths.docs + '/dist'))
            .pipe(cleancss())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(distPaths.docs + '/dist'))
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
    docTasks.scssDocs
));



gulp.task('build', gulp.parallel('scss', 'docs'));
gulp.task('default', gulp.series('build'))