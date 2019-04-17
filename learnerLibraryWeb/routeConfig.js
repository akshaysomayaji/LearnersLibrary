(function () {
    'use strict';
    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'Views/layout/mainlayout.html',
                    resolve: {
                        loadCSS: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load CSS files
                            return $ocLazyLoad.load([{
                                serie: true,
                                name: 'Font Awesome',
                                files: ['content/css/font-awesome.min.css']
                            }, {
                                serie: true,
                                name: 'Simple Line Icons',
                                files: ['content/css/simple-line-icons.css']
                            }]);
                        }],
                    }
                })
                .state('appSimple', {
                    abstract: true,
                    templateUrl: 'Views/layout/simple.html',
                    resolve: {
                        loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                            // you can lazy load files for an existing module
                            return $ocLazyLoad.load([{
                                serie: true,
                                name: 'Font Awesome',
                                files: ['content/css/font-awesome.min.css']
                            }, {
                                serie: true,
                                name: 'Simple Line Icons',
                                files: ['content/css/simple-line-icons.css']
                            }]);
                        }]

                    }
                })
                .state('appSimple.login', {
                    url: '/login',
                    //controller: 'logincontroller',
                    templateUrl: 'Views/pages/login.html'
                })
                .state('app.notification',
                    {
                        url: '/Notification',
                        abstract: true,
                        template: '<ui-view></ui-view>',

                    })
                .state('app.main', {
                    url: '/dashboard',
                    templateUrl: 'dashboard.html',
                });
            $urlRouterProvider.otherwise('/dashboard');
        }]);
})();