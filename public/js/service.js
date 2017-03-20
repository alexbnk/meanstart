app.factory('mainFactory', function($http) {

  var getGoogleData = function(lat,long) {

      var googlemaps = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=true";

      return $http.get(googlemaps)
          .then(function(response) {
              return response.data.results[0].address_components[2].long_name//play with data here !!!!
          }, function(err){
            console.error(err);
          });

    };



return {
getGoogleData:getGoogleData
}

});
