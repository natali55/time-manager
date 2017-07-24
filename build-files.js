exports.scripts = [
	{
		files: [
			'components/lodash/lodash.js'
		],
		min: true,
		concat: 'scripts/libs.js'
	},
	{
		files: [
			'components/angular/angular.js',
			'components/angular-ui-router/release/angular-ui-router.js',
			'components/angular-sanitize/angular-sanitize.js',
		],
		min: true,
		concat: 'scripts/ng-core.js'
	},
	{
		files: [
			'components/angular-bootstrap/ui-bootstrap.min.js',
			'components/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'components/ng-dialog/js/ngDialog.min.js'
		],
		min: true,
		concat: 'scripts/ng-vendor.js'
	},
	{
		files: [
			'app/app.js',
			'app/app.config.js',
			'app/**/*.module.js',
			'app/**/*.config.js',
			'app/**/*.constant.js',
			'app/**/*.service.js',
			'app/**/*.filter.js',
			'app/**/*.directive.js',
			'app/**/*.component.js',
			'app/**/*.controller.js',
			'app/**/*.template.js',
			'app/**/*.js'
		],
		min: true,
		concat: 'scripts/app.js'
	}


];

exports.styles = [
	{
		files: [
			'components/bootstrap/dist/css/bootstrap.css',
			'components/bootstrap/dist/css/bootstrap.css.map'
		],
		min: true,
		concat: 'styles/bootstrap.css'
	},
	{
		files: [
			'components/ng-dialog/css/ngDialog.min.css',
			'components/ng-dialog/css/ngDialog-theme-default.min.css'
		],
		min: true
	},
	{
		files: [
			'fonts/*.less',
			'app/app.less',
			'styles/*.less'
		],
		min: true,
		concat: 'styles/app.css',
		less: true
	},
	{
		files: [
			'components/bootstrap/fonts/**/*.ttf'
		]
	}
];
