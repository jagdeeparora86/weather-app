/**
 * Created by singhj21 on 11/20/17.
 */
(function(){
    app.factory("weatherService", WeatherService);

    WeatherService.$inject = ['$http', 'notifier'];
    function WeatherService($http, notifier){
        var svc = {};
        svc.getCurrent = getCurrent;
        svc.getForecast = getForecast;
        svc.getHistory = getHistory;
        svc.unit = "imperial";

        var apikey = "944b98b3eefa1fd8db29bc603877a609";
        var baseUrl = "https://api.openweathermap.org/data/2.5";

        function getCurrent(name, type){
            var url = baseUrl + "/weather?" + type + "=" + name + "&units=" + svc.unit + "&appid=" + apikey;
            return $http.get(url)
                .then(function(result){
                    return result.data;
                }, function(result){
                    notifier.errorInfo(result.data.message, "City Not Found!");
                })
        }

        function getForecast(name, type){
            var url = baseUrl + "/forecast?" + type + "=" + name + "&units=" + svc.unit + "&appid=" + apikey;
            return $http.get(url)
                .then(function(result){
                    return result.data;
                },function(result){
                    notifier.errorInfo(result.data.message, "City Not Found!");
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
