/**
 * Created by singhj21 on 11/22/17.
 */

(function(){
    app.controller('foreCastController',ForeCastController);

    ForeCastController.$inject = ['$scope', 'weatherService'];
    function ForeCastController($scope, weatherService){
        $scope.home.getFiveDayForecast = getFiveDayForecast;

        function getFiveDayForecast(type){
            console.log(type);
            weatherService.getForecast($scope.home.city, type)
                .then(function(result){
                    $scope.forecastDetails = result;
                    $scope.daysWeather = getWeatherByDays(result.list);
                })
        }

        function getWeatherByDays(list){
            var days = new Map();
            angular.forEach(list,function(val, index){
                var date = new Date(0);
                date.setUTCSeconds(val.dt);
                var day = date.getDate();
                if(!days[day])
                    days[day] = [];
                days[day].push(val);
            })
            return days;
        }
    }

})()


