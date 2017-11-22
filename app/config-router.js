/**
 * Created by singhj21 on 11/20/17.
 */

(function(){
    //Routes registration.
    app.config(['$stateProvider', '$urlRouterProvider', uiRouting]);

    /**
     * UI Routes defination.
     */
    function uiRouting($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home')

        $stateProvider
            .state('home', {
                url : '/home',
                views: {
                    '': {
                        templateUrl: 'app/home/home.html',
                        controller: 'homeController'
                    },
                    'forecast@home': {
                        templateUrl: 'app/home/home.forecast.html',
                        controller: 'foreCastController'
                    }
                }
            })
    }

})()