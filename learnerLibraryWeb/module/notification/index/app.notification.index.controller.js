(function () {
    'use strict';
    angular.module('app.module.notification.index').controller('notificationCtrl', notificationCtrl);

    function notificationCtrl($scope, notificationService, $state) {
        $scope.formData = [];
        $scope.pager = [];
        var pageNumber = $state.params.pageNumber;
        console.log(pageNumber);
        notificationService.getNotification(pageNumber).then(function (result) {
            console.log(result);
            $scope.formData = result.notification;
            $scope.formData.forEach(function (obj) {
                obj.links = obj.notificationReferenceLink.split(",");
            });

        });

        notificationService.getPagination(pageNumber).then(function (result) {
            console.log(result);
            $scope.pager = result;
            

        });

        $scope.setPage = function (pageNumber) {
            $state.go('app.notification.index', { pageNumber: pageNumber });
        };


    }
})();