(function () {
    'use strict';
    angular.module('app.module.notification', ['app.module.notification.index', 'app.module.notification.add']).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('app.notification.index',
                {
                    url: '/Index',
                    templateUrl: 'module/notification/index/notificationDetails.html',
                    controller: 'notificationCtrl',
                    params : {
                        pageNumber: 1
                    }
                })
            .state('app.notification.add',
                {
                    url: '/Add',
                    templateUrl: 'module/notification/add/notificationAdd.html',
                    controller: 'notificationAddCtrl',
                });
    }
})();