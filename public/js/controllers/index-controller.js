angular.module('food-drive').controller('IndexController', ['$scope', 'Global', 'Restangular', function ($scope, Global, Restangular) {
    $scope.global = Global;
    
    var Foods = Restangular.all('food');
    
    $scope.center = {
        latitude: 36.000041,
        longitude: -78.939570
    };
    $scope.zoom = 15;
    $scope.fit = true;
    
    $scope.markers = [];
    $scope.latitude = null;
    $scope.longitude = null;
    
    $scope.create = function() {
        if($scope.latitude === null || $scope.longitude === null) {
            $('#locationInput').val('Please select a location.');
        }
        else {
        
            //TODO check that start and end times are valid times.
            var food = {
                name: this.name,
                latitude: $scope.latitude,
                longitude: $scope.longitude,
                start_time: this.startTime,
                end_time: this.endTime,
                food_types: this.foods.split(' ')
            };
            
            Foods.post(food)
                .then(function(response) {
                    console.log("OK!");
                });
            
            console.log(food);
        }
    };
}]);
