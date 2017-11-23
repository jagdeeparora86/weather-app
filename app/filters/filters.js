app.filter('unitFilter', ['weatherService', '$sce', function(weatherService, $sce){
    return function(input){
        if(weatherService.unit == "imperial"){
            return  'F';
        }
        else{
            return "C";
        }
    }
}])

app.filter('iconUrlFilter', ['wAppConstants', function(wAppConstants){
    return function(input){
        var url = wAppConstants.base_img_icon + input + ".png";
        return url;
    }
}])