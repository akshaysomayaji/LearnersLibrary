﻿(function () {
    'use strict';
    angular.module('app', ['ui.select','ui.router','ui.bootstrap', 'ngSanitize', 'oc.lazyLoad','app.controllers'])
        .constant('AUTH_EVENTS', {
            notAuthenticated: 'auth-not-authenticated'
        }).constant('API_ENDPOINT', {
            url: 'http://localhost:12345/api',
        }).constant('clientConfigObj', {
            poweredByName: 'Blogger App Solutions',
        });
})();