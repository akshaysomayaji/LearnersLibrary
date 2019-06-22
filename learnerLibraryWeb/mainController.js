(function () {
    'use strict';
    angular.module("app.controllers", ['app.module.notification', 'app.module.ca'])
        .controller("menuController", menuController)
        .controller("loginCtrl", loginCtrl);

    function menuController($scope, $rootScope, $uibModal) {
        $rootScope.toggle = true;
        $rootScope.sidebarStyle = { 'display': 'none' };


        $scope.w3_open = function () {
            $rootScope.toggle = !$rootScope.toggle;
            if ($rootScope.toggle) {
                $rootScope.sidebarStyle = { 'display': 'none' };
            } else {
                $rootScope.sidebarStyle = { 'display': 'block' };

            }
        };

        $scope.w3_close = function () {
            $rootScope.toggle = !$rootScope.toggle;
            $rootScope.sidebarStyle = { 'display': 'none' };
        };


        $scope.menuList = [
            { displayName: "Daily Current Affairs", name: "dca", isSelected: false, url: "app.ca.index" },
            { displayName: "Exam Notification", name: "en", isSelected: false, url: "app.notification.index" },
            { displayName: "Course", name: "course", isSelected: false, url: "" },
            { displayName: "Downloads", name: "downloads", isSelected: false, url: "" },
            { displayName: "Important", name: "important", isSelected: false, url: "" },
            { displayName: "About", name: "about", isSelected: false, url: "" },
        ]

        $scope.change = function (selectedMenu) {
            $scope.menuList.forEach(function (menu) {
                if (selectedMenu == menu) {
                    menu.isSelected = true;
                } else {
                    menu.isSelected = false;
                }
            })
        }

        $scope.loginModel = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'loginCtrl',
                templateUrl: 'Views/pages/login.html',
                scope: $scope,
                backdrop: 'static',
                keyboard: true,
                size: 'md',
                //resolve: {
                //    items: function () {
                //        return $scope.formData;
                //    }
                //}
            });
            modalInstance.result.then(function () {
            }, function () { });
        };
    }

    function loginCtrl($scope, $uibModalInstance) {
        $scope.closeModal = function () {
            $uibModalInstance.close();
        };
    }
})();