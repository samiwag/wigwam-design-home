var paths = {
    css: {
        src: 'studio/css/**/*.css',
        dest: 'server/public/css'
    },
    img: {
        src: 'studio/img/**/*',
        dest: 'server/public/img'
    },
    html: {
        src: [
            'studio/modules/**/*.html',
            '!./studio/modules/**/partials/*'
        ],
        dest: 'server/public/html'
    },
    fonts:{
        src:'studio/fonts/**/*',
        dest:'server/public/fonts'
    },
    htmlPartials: {
        header: 'studio/html/partials/header.html',
        footer: 'studio/html/partials/footer.html'
    },
    browserify: {
        src: './studio/app.js',
        watch: [
            './studio/*.js',
            './studio/**/*.js',
            './studio/**/*.html'
        ],
        dest: 'server/public/js'
    },
    templateJS :{
        src:'studio/common/templateJs/**/*.js',
        dest:'server/public/js'
    },
    vendorJS: {
        src: [
            './bower_components/angular/angular.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            './bower_components/angular-cookies/angular-cookies.js',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './bower_components/domready/ready.js',
            './bower_components/lodash/lodash.js',
            './bower_components/restangular/dist/restangular.js'
        ],
        dest:'server/public/js'
    },
    vendorCSS: {
        src: [
            './bower_components/bootstrap/dist/css/bootstrap.css', // v3.1.1
            './bower_components/font-awesome/css/font-awesome.css' // v4.1.0
        ],
        dest: 'server/public/css'
    }
};


module.exports.paths = paths;
