'use strict';

var Promise = require('promise');
var $ = require('jquery');

var CommsFactory = function($rootScope, $http) {

    var http = $http;
    http.defaults.headers.post["X-CSRF-Token"] = $('meta[name="csrf-token"]').attr("content");

    return {
        http: http
    }

};

CommsFactory.$inject = ['$rootScope', '$http'];
module.exports = CommsFactory;