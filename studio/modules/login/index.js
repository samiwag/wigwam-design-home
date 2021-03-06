'use strict';

module.exports = angular.module('modules.login', [])
    .directive('loginView', require('./loginDirective'))
    .controller('LoginCtrl', require('./LoginController'))
    .config(require('./loginRoutes'));