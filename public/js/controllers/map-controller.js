angular.module('food-drive')
    .controller('MapController', ['$scope', function($scope) {
        $scope.center = {
            latitude: 36.000041,
            longitude: -78.939570
        };
        $scope.markClick = true;
        $scope.zoom = 15;
        $scope.fit = true;
    }]);
