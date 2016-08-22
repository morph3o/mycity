const gulp = require('gulp');
/* eslint no-unused-vars: "off" */
const watch = require('gulp-watch');
const shell = require('gulp-shell');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const git = require('gulp-git');
const prompt = require('gulp-prompt');
const jest = require('jest-cli');

const paths = {
	src: ['./models/**/*.js', './routes/**/*.js', 'keystone.js', 'package.json'],
	code: ['./models/**/*.js', './routes/**/*.js', 'keystone.js'],
	style: {
		all: './public/styles/**/*.scss',
		output: './public/styles/',
	},
};

const jestConfig = {
	rootDir: '.',
};

gulp.task('lint', function () {
	gulp.src(paths.code)
		.pipe(eslint({ fix: true }))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('add-tests', ['lint'], function () {
	gulp.src(['!node_modules/**', '!node_modules', './__tests__/*'])
		.pipe(git.add());
});

gulp.task('add-files', ['lint'], function () {
	gulp.src(['!node_modules/**', '!node_modules', '**/*'])
		.pipe(git.add());
});

gulp.task('commit', ['lint', 'add-files', 'add-tests', 'test'], function () {
	var message;
	return gulp.src(['!node_modules/**', '!node_modules', '!.idea', '**/*'])
		.pipe(prompt.prompt({
			type: 'input',
			name: 'commit',
			message: 'Please enter commit message...',
		}, function (res) {
			if (res.commit && res.commit !== '') {
				gulp.src(['!node_modules/**', '!node_modules', '!.idea', '**/*'])
					.pipe(git.commit(res.commit));
			} else {
				throw Error('A message should be entered');
			}
		}));
});

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function () {
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});

gulp.task('test', ['lint'], function (done) {
	jest.runCLI({ config: jestConfig }, '.', function () { done(); });
});

gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [
	'lint',
	'watch:sass',
]);

gulp.task('default', ['watch', 'runKeystone']);

gulp.task('push master', ['lint', 'test'], function () {
	git.push('origin', 'master', function (err) {
		if (err) throw err;
	});
});

gulp.task('push develop', ['lint', 'test'], function () {
	git.push('origin', 'develop', function (err) {
		if (err) throw err;
	});
});
