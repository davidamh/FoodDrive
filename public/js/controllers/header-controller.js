angular.module('food-drive').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
    
    $scope.isCollapsed = false;
}]);
