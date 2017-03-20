app.controller('mainController', function($scope, mainFactory, geolocation) {




    // GET CLIENT LOCATION (promise)
    geolocation.getLocation()
        .then(function(data) {
            // extract the lat,lon from the response into variables;
            var lat = data.coords.latitude;
            var long = data.coords.longitude;
            // invoke function in factory that returns only the city
            mainFactory.getGoogleData(lat, long)
                .then(function(city) {
                    //make city available in the scope
                    $scope.city = city;
                });
        });

});
