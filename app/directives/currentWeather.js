/**
 * Created by singhj21 on 11/22/17.
 */

app.directive("currentWeather", CurrentWeather);

function CurrentWeather(){
    return {
        restrict : 'E',
        scope: {
            weatherDetail :'=',
            iconUrl : '='
        },
        templateUrl: 'app/directives/current-weather.html'
    }
}
