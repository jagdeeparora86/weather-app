/**
 * Created by singhj21 on 11/20/17.
 */

(function(){

    app.controller("homeController", HomeController);

    HomeController.$inject = ['$scope', 'weatherService', 'wAppConstants'];
    function HomeController($scope, weatherService, wAppConstants){
        $scope.updateWeather = updateWeather;
        $scope.updateUnit = updateUnit;
        var baseIconUrl = wAppConstants.base_img_icon;
        $scope.home = {};
        $scope.unitStatus = true; //For fahrenheit

        function updateWeather(){
            var type;
            if ($scope.home.city.match(/^\d/)) {
                type = "zip";
            }
            else {
                type = "q";
            }
            weatherService.getCurrent($scope.home.city, type)
                .then(function(result){
                    $scope.weatherDetail  = result;
                    $scope.home.iconUrl= baseIconUrl + result.weather[0].icon + ".png";
                    $scope.home.getFiveDayForecast(type);
                })
        }

        function updateUnit(){
            if($scope.unitStatus){
                weatherService.unit = "metric";
            }
            else{
                weatherService.unit = "imperial";
            }
            $scope.unitStatus = !$scope.unitStatus;
            if($scope.home.city){
                $scope.updateWeather();
            }
        }
    }
})()