(function () {
    'use strict';
    angular.module('app.module.notification.index').controller('notificationCtrl', notificationCtrl);

    function notificationCtrl($scope, notificationService, $state) {
        $scope.formData = [];
        $scope.pager = [];
        $scope.pageNumber = $state.params.pageNumber;

        notificationService.getNotification($scope.pageNumber).then(function (result) {
            $scope.formData = result.notification;
            $scope.formData.forEach(function (obj) {
                obj.links = obj.notificationReferenceLink.split(",");
            });
        });

        notificationService.getPagination($scope.pageNumber).then(function (result) {
            $scope.pager = result;
        });

        $scope.setPage = function (pageNumber) {
            $state.go('app.notification.index', { pageNumber: pageNumber });
        };
    }
})();