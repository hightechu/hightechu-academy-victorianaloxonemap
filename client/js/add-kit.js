/* 
	name: add-kit.js
	purpose: displays map on add-kit.html
*/

// used in multiple functions (must be global)
var lng;
var lat;
var popup;

// used in register-login.js
var cachelocation = [];
window.cachelocation = cachelocation;

// create map
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVjY2FwOSIsImEiOiJja2p1cHMwbWYwNHo3MnRybDB4bjA0enY3In0.lq1Izf2pK5I363vmRa7ujA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/beccap9/ckk636uu10bhf17o2ykwvjwv2',
    center: [-123.3446, 48.4484],
    zoom: 12
});
 
// add input to search for location on map
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        fuzzyMatch: true,
        marker: false
    })
);
 
 // shows current kit locations (see register-login.js)
displayMarker();


// create marker object that user can use to add location
var marker = new mapboxgl.Marker({color: "red", draggable: true})
.setLngLat([-123.3446, 48.4484])
.addTo(map);

// put draggable marker in front
marker.getElement().style.zIndex = 1000;

// get name and coordinates of new location
function addLocation(){
    
    // stop user from moving new location
    marker.setDraggable(false);
    
    // get coordinates of new location and save longitude & latitude separately
    var coords = marker.getLngLat();
    
    var temp = [];
	temp = coords.toString().split(", ");
	
    lng = temp[0].replace("LngLat(", "");
	lat = temp[1].replace(")", "");
	
	
    // create popup for user to enter location name
    popup = new mapboxgl.Popup({ closeOnClick: false,  closeButton: false})
        .setLngLat([lng, lat])
        .setHTML('<input type="text" class="form-control" placeholder="Enter Location Name" id="input"></input>')
        .addTo(map);

    // put popup in front of draggable marker    
    popup.getElement().style.zIndex = 1001;

    // change button to allow user to save named location
    document.getElementById("setLocation").innerHTML = "Save<br>Location";
    document.getElementById("setLocation").setAttribute("onclick","saveLocation()");
    document.getElementById("setLocation").style.backgroundColor = "red";
    document.getElementById("setLocation").setAttribute("onmouseout","this.style.backgroundColor = 'red'");
    document.getElementById("setLocation").setAttribute("onmouseover","this.style.backgroundColor = '#c71414'");

    // show back button
    document.getElementById("back").style.display = "block";
}

// get new location info & save it
function saveLocation() {

    // name of new location
    var input = document.getElementById("input").value;
    
    // error checking if location name is empty
    if (input != "") {
        
        // pass in new location's info to be saved to Firebase
        getLocation(lng, lat, input);  
        
        // show success message
        var messagePopup = new mapboxgl.Popup({ closeOnClick: false,  closeButton: true})
        .setLngLat([lng, lat])
        .setHTML('<div>Location successfully saved!</div>')
        .addTo(map);
        
        // put popup in front
        messagePopup.getElement().style.zIndex = 1001;
        
        // show new marker`
        displayMarker();
    } else {
        
        // show error message
        var messagePopup = new mapboxgl.Popup({ closeOnClick: false,  closeButton: true})
        .setLngLat([lng, lat])
        .setHTML('<div>Sorry, you must enter a name for the location. Please try again!</div>')
        .addTo(map);
        
        // put popup in front
        messagePopup.getElement().style.zIndex = 1001;
    }
    
    // exit saving location mode
    exitLocation();
}

// lets user go back if they don't want to save location
function exitLocation() {
    
    // allow user to move location
    marker.setDraggable(true);
    
    // get rid of name popup
    popup.remove();
    
    // change button back to "Name Location"
    document.getElementById("setLocation").innerHTML = "Name<br>Location";
    document.getElementById("setLocation").setAttribute("onclick","addLocation()");
    document.getElementById("setLocation").style.backgroundColor = "#004949";
    document.getElementById("setLocation").setAttribute("onmouseout","this.style.backgroundColor = '#004949'");
    document.getElementById("setLocation").setAttribute("onmouseover","this.style.backgroundColor = '#003636'");
    
    // hide back button
    document.getElementById("back").style.display = "none";
}