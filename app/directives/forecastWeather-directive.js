/**
 * Created by singhj21 on 11/22/17.
 */

(function () {

    app.directive("forecastWeather", ForecastWeather);

    function ForecastWeather() {
        return {
            restrict: "E",
            templateUrl: "app/directives/forecast-weather.html",
            scope: {
                day: "="
            }
        }
    }

})();