var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var replace = require('gulp-replace');
var iconfont = require('gulp-iconfont');
var fs = require('fs');
var Handlebars = require('handlebars');
var async = require('async');
var sourcemaps = require('gulp-sourcemaps');
const path = require('path');
const glob = require('glob');
const iconMatch = /^u[0-9A-F]{4}\-(.+)$/;

var runTimestamp = Math.round(Date.now()/1000);


var paths = {
    source: './src/*.scss',
    variables: './src/_variables.scss',
    doc: './docs/src/scss/*.scss',
    fonts: './src/fonts/',
    icons: './src/icons/'
};

var distPaths = {
    source: './dist',
    docs: './docs'
};

var libraryFileName = 'rsui';
var version = require('./package.json').version;

function buildSCSS() {
    return gulp.src(paths.source)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed', precision: 10 })
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
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(distPaths.source));
}

function copySCSSToDocs() {
    return gulp.src(distPaths.source + '/**', {
        base: distPaths.source
    }).pipe(gulp.dest(distPaths.docs + '/dist'));
}


function replaceTokens() {
    return replace('{PACKAGE_VERSION}', version);
}

function buildFonts(done) {
    const iconFontName = libraryFileName + '-icons';

    const existingFonts = gulp.src(paths.fonts + '**', {
        base: './src'
    }).pipe(gulp.dest(distPaths.source));
    
    const iconFontStream = gulp.src(paths.icons + '**/*.svg', {
        base: './src'
    }).pipe(iconfont({
        fontName: iconFontName,
        prependUnicode: true, // Prefix source SVG files with their unicode character
        formats: ['ttf', 'eot', 'woff', 'woff2'],
        timestamp: runTimestamp,
        fontHeight: 1000,
        normalize: true,
        log() {}
    }));

    async.parallel([
        function waitForStaticFonts(callback) {
            existingFonts.on('finish', callback);
        },
        function createGlyphTemplate(callback) {
            iconFontStream.on('glyphs', function (glyphs) {
                fs.readFile('./src/icons/_template.handlebars.scss', { encoding: 'utf8' }, (err, iconScssTemplate) => {
                    if (err) throw err;

                    var iconTemplateData = {
                        glyphs: glyphs.map(glyph => {
                            return {
                                name: glyph.name,
                                codepoint: glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
                            }
                        }),
                        fontName: iconFontName,
                        className: 'icon'
                    };
                    var iconScss = Handlebars.compile(iconScssTemplate.toString())(iconTemplateData);

                    fs.writeFile('./src/_icons.scss', iconScss, err => {
                        if (err) throw err;

                        callback();
                    });
                });
            })
        },
        function waitForIconFonts(callback) {
            iconFontStream.pipe(gulp.dest(distPaths.source + '/fonts')).on('finish', callback);
        }
    ], done);
}

var docTasks = {
    scssDocs() {
        return gulp.src(paths.doc)
            //.pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed', precision: 10 })
                .on('error', sass.logError)
            )
            .pipe(autoprefixer())
            .pipe(csscomb())
            .pipe(gulp.dest(distPaths.docs + '/dist'))
            .pipe(cleancss())
            .pipe(rename({
                suffix: '.min'
            }))
            //.pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(distPaths.docs + '/dist'))
    },
    html() {
        const sassVariables = {};
        const icons = (function () {
            const icons = [];
            
            glob('./src/icons/**/*.svg', {}, (err, matches) => {
                matches.forEach(match => {
                    const fileName = path.basename(match, path.extname(match));
                    const iconName = fileName.match(iconMatch)[1];

                    icons.push(iconName);
                })
            });

            return icons;
        })();

        return gulp.src('docs/src/**/!(_)*.pug')
            .pipe(pug({
                pretty: true,
                locals: {
                    sass: sassVariables,
                    icons: icons
                }
            }))
            .pipe(gulp.dest('./docs/'))
    }
};

gulp.task('scss', gulp.series(
    buildSCSS, 
    copySCSSToDocs
));

gulp.task('docs', gulp.parallel(
    docTasks.html,
    docTasks.scssDocs
));

gulp.task('fonts', buildFonts);

gulp.task('build', gulp.series('fonts', gulp.parallel('scss', 'docs')));
gulp.task('default', gulp.series('build'))