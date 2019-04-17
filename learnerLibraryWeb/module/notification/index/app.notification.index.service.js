(function () {
    'use strict';
    angular.module('app.module.notification.index').service('notificationService', notificationService);

    function notificationService($q, $http, API_ENDPOINT) {
        var formData = {};

        this.getNotification = function (pageNumber) {
            return $q(function (resolve, reject) {
                $http.get(API_ENDPOINT.url + '/notification/get', { params: { pageNumber: pageNumber }}).then(function (result) {
                    if (result.data.success) {
                        resolve(result.data);
                    } else {
                        resolve(result.data);
                    }
                }, function (result) {
                    reject(result.data);
                });
            });
        };

        this.addNotification = function (userObj) {
            return $q(function (resolve, reject) {
                $http.post(API_ENDPOINT.url + '/notification/save', userObj).then(function (result) {
                    if (result.data.success) {
                        resolve(result.data);
                    } else {
                        resolve(result.data);
                    }
                }, function (result) {
                    reject(result.data);
                });
            });
        };

        this.getPagination = function (pageNumber) {
            return $q(function (resolve, reject) {
                $http.get(API_ENDPOINT.url + '/notification/pagination/get', { params: { currentPageNumber: pageNumber } }).then(function (result) {
                    if (result.data.success) {
                        resolve(result.data);
                    } else {
                        resolve(result.data);
                    }
                }, function (result) {
                    reject(result.data);
                });
            });
        };
    }
})();