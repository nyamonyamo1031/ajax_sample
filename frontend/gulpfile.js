const gulp = require('gulp')
const sass = require('gulp-sass')
const fs = require('fs')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename');
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const cssWring = require('csswring')
const autoprefixerOption = {
  grid: true
}
const postcssOption = [
  flexBugsFixes,
  autoprefixer(autoprefixerOption),
  cssWring
]

//gulpのsassタスク
gulp.task('sass', () => {
  return gulp.src('./src/scss/common.scss')
    .pipe(sass())
    .pipe(postcss(postcssOption))
    .pipe(gulp.dest('./dist/css'))
})

//gulpのwatchタスク
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('./**/*.ejs', gulp.series('ejs'))
})

// ejsのタスク
gulp.task('ejs', () => {
  return gulp
    .src('./src/html/*.ejs')
    //.src('./src/html/index.ejs')
    .pipe(rename({ extname: '.html' }))
    .pipe(ejs(ejsDataOption, {}, ejsSettingOption))
    //.pipe(htmlmin(htmlminOption))
    .pipe(gulp.dest('./dist/html'))
})

//JSONファイルの読み込みと変換
const configJsonData = fs.readFileSync('./src/html/config.json')
const configObj = JSON.parse(configJsonData)

//ejsのデータ読み込み設定
const ejsDataOption = {
  config: configObj
}

// ejsのコンパイル設定用のオブジェクト
const ejsSettingOption = {
  ext: '.html'
}

// htmlminの設定
// const htmlminOption = {
//   collapseWhitespace: true
// }
