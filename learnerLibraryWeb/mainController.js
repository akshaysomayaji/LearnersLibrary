(function () {
    'use strict';
    angular.module("app.controllers", ['app.module.notification']).controller("menuController", menuController);

    function menuController($scope, $rootScope) {
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
            $rootScope.toggle = !$rootScope.toggle;;
            $rootScope.sidebarStyle = { 'display': 'none' };
        };


        $scope.menuList = [
            { displayName: "Daily Current Affairs", name: "dca", isSelected: false, url: "" },
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
    }
})();