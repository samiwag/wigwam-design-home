'use strict';

module.exports = function loginDirective() {
    return {
        controller: 'LoginCtrl', // Called from HomeController.js
        controllerAs: 'loginCtrl',
        bindToController: true,
        restrict: 'EA',
        scope: true,
        template: require('./login.html')
    };
};