/**
 * Created by singhj21 on 11/20/17.
 */
(function(){
    app.factory("weatherService", WeatherService);

    WeatherService.$inject = ['$http'];
    function WeatherService($http){
        var svc = {};
        svc.getCurrent = getCurrent;
        svc.getForecast = getForecast;
        svc.getHistory = getHistory;

        var apikey = "944b98b3eefa1fd8db29bc603877a609";
        var baseUrl = "https://api.openweathermap.org/data/2.5";

        function getCurrent(name){
            var url = baseUrl + "/weather?q=" + name + "&units=imperial&appid=" + apikey;
            return $http.get(url)
                .then(function(result){
                    return result.data;
                }, function(data){
                    console.log("handle Error here");
                })
        }

        function getForecast(name){
            var url = baseUrl + "/forecast?q=" + name + "&units=imperial&appid=" + apikey;
            return $http.get(url)
                .then(function(result){
                    return result.data;
                },function(data){
                    console.log("Add error handling");
                })
        }

        function getHistory(id){
            var url = "http://history.openweathermap.org/data/2.5/history/city?id=5373327&type=day&start=1511352000&cnt=10&appid=" + apikey;
            return $http.get(url)
                .then(function(result){
                    return result.data;
                })
        }

        return svc;
    }
})()
