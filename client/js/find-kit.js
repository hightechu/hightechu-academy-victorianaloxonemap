var currentlng; // starting longitude of user
var currentlat; // starting latitude of user	
    
// create map
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVjY2FwOSIsImEiOiJja2p1cHMwbWYwNHo3MnRybDB4bjA0enY3In0.lq1Izf2pK5I363vmRa7ujA';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/beccap9/ckk636uu10bhf17o2ykwvjwv2',
	center: [-123.3446, 48.4484],
	zoom: 12
});
	

//displays the kit location markers 
displayMarker();
 	
	  
 // runs if able to get user location
function success(pos) {
    var crd = pos.coords;
    currentlng = crd.longitude;
    currentlat = crd.latitude;	
  
    // get kit location closest to user & display directions
    findNearestPoint();
}

// runs if failed to get user location
function error() {
  
    // put in preset coordinates
    currentlng = -123.3117;
    currentlat = 48.4634;
  
    // get kit location closest to user & display directions
    findNearestPoint();
}

// set latitude and longitude of nearest kit location
target = {
    latitude : 0,
    longitude: 0
};

options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

map.on('load',  function() {
    
    // get user's location then runs specific function on success or failure
    var current = navigator.geolocation.getCurrentPosition(success, error, options);
})
	  
 // resets the location
function resetLocation(){
    map.flyTo({
        center: [
        currentlng, // users current longitude
        currentlat // users current latitude
        ],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
}
	 
// displays directions control on page
var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiYmVjY2FwOSIsImEiOiJja2p1cHMwbWYwNHo3MnRybDB4bjA0enY3In0.lq1Izf2pK5I363vmRa7ujA',
    unit: 'metric',
    profile: 'mapbox/walking'
});

map.addControl(directions, 'top-right');

// find nearest kit to user coordinates & set route	
function findNearestPoint() {
    
        // once the map loads turf.js to find nearest point to user
        var targetPoint = turf.point([currentlng, currentlat], {"marker-color": "#0F0"});
		var points = turf.featureCollection(
			cachelocation.map(location => turf.point(location))
		);

		var nearest = turf.nearestPoint(targetPoint, points);
		var coords = nearest.geometry.coordinates;

        // set user location & nearest kit as start & end of route
		directions.setOrigin([currentlng, currentlat]); // can be address in form setOrigin("12, Elm Street, NY")
		directions.setDestination(coords); // can be address
}

	
	
	
	
	
	