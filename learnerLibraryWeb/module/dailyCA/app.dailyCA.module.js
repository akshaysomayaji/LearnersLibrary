(function () {
    'use strict';
    angular.module('app.module.ca', ['app.module.CA.index', 'app.module.CA.add']).config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('app.ca.index',
                {
                    url: '/Index',
                    templateUrl: 'module/dailyCA/index/CADetails.html',
                    controller: 'CACtrl',
                    params: {
                        pageNumber: 1
                    }
                })
            .state('app.ca.add',
                {
                    url: '/Add',
                    templateUrl: 'module/dailyCA/add/CAAdd.html',
                    controller: 'CAAddCtrl',
                });
    }
})();