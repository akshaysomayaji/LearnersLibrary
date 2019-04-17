(function () {
    'use strict';
    angular.module('app.module.notification.add').controller('notificationAddCtrl', notificationAddCtrl);

    function notificationAddCtrl($scope, notificationService) {
        $scope.formData = {};
        $scope.pager = [];

        $scope.save = function (form) {
            form.$submitted = true;
            if (form.$valid) {
                notificationService.addNotification($scope.formData).then(function (res) {
                    alert(res.msg);
                });
            }

        }


    }
})();