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
    
        $scope.locError = false;
        $scope.startTimeError = false;
        $scope.endTimeError = false;
    
        if($scope.latitude === null || $scope.longitude === null) {
            $scope.locError = true;
            $('#locationInput').val('Please select a location.');
        }
        
        if(isNaN(Date.parse(this.startTime))) {
            $scope.startTimeError = true;
            $('#startTimeInput').val('Please enter a valid time.');
        }
        
        if(isNaN(Date.parse(this.endTime))) {
            $scope.endTimeError = true;
        }
            $('#endTimeInput').val('Please enter a valid time.');
        
        if(!($scope.locError || $scope.startTimeError || $scope.endTimeError)) {
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
                    // TODO do stuff
                });
            
            console.log(food);
        }
    };
}]);
