/**
 * Created by singhj21 on 11/20/17.
 */

(function(){

    app.controller("homeController", HomeController);

    HomeController.$inject = ['$scope', 'weatherService', 'wAppConstants'];
    function HomeController($scope, weatherService, wAppConstants){
        $scope.test = "Testing Done";
        $scope.updateWeather = updateWeather;
        var baseIconUrl = wAppConstants.base_img_icon;
        $scope.home = {};
        $scope.home.city = "Milpitas";

        function updateWeather(){
            weatherService.getCurrent($scope.home.city)
                .then(function(result){
                    $scope.weatherDetail  = result;
                    $scope.iconUrl= baseIconUrl + result.weather[0].icon + ".png";
                    $scope.home.getFiveDayForecast();
                })
        }

        $scope.weatherDetail = {
            "coord": {"lon": -121.91, "lat": 37.43},
            "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50n"}, {
                "id": 741,
                "main": "Fog",
                "description": "fog",
                "icon": "50n"
            }],
            "base": "stations",
            "main": {"temp": 286.25, "pressure": 1021, "humidity": 93, "temp_min": 284.15, "temp_max": 288.15},
            "visibility": 16093,
            "wind": {"speed": 2.1, "deg": 130},
            "clouds": {"all": 1},
            "dt": 1511337780,
            "sys": {
                "type": 1,
                "id": 479,
                "message": 0.175,
                "country": "US",
                "sunrise": 1511362509,
                "sunset": 1511398351
            },
            "id": 5373327,
            "name": "Milpitas",
            "cod": 200
        }
    }
})()