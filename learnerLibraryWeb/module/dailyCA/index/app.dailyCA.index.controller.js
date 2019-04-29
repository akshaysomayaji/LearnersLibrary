
(function () {
    'use strict';
    angular.module('app.module.CA.index',[]).controller('CACtrl', CACtrl);

    function CACtrl($scope) {
        $scope.formData = [];
        $scope.pager = [];
        $scope.pageNumber = $state.params.pageNumber;

        $scope.setPage = function (pageNumber) {
            $state.go('app.notification.index', { pageNumber: pageNumber });
        };

    }
})();