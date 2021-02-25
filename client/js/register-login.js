/* 
	name: register-login.js
	purpose: handles all Firebase calls (login, adding kit locations)
*/
 
 
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: " AIzaSyD43410bqPCKXQoGbXRVTHcBM8AjkviSJU ",
    authDomain: "victoria-naloxone-map.firebaseapp.com",
    databaseURL: "https://victoria-naloxone-map-default-rtdb.firebaseio.com/",
    projectId: "victoria-naloxone-map",
    storageBucket: "victoria-naloxone-map.appspot.com",
    messagingSenderId: "687916298506",
    appId: "1:687916298506:web:48243d7d9731ca4ee68af3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Signs user in using Google
function signIn(){
    
    // Sign into Firebase using popup auth & Google as the identity provider
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(user => {
       
       // once signed in, change login to button that takes user to add-kit.html
       document.getElementById("login").innerHTML = "Add Kit <br> <i class='fas fa-map-marker-alt'></i>";
       document.getElementById("login").setAttribute("href","javascript:toMap()");
       document.getElementById("login").style.padding = "0.5% 12%;"
       document.getElementById("login").style.minWidth = "15vw"
   })
}//signIn

// goes to map where user can register kits
function toMap(){
    window.location="add-kit.html";
}

// true if a user is signed-in, so ensures that anonymous user cannot get in
function isUserSignedIn() {
    firebase.auth().onAuthStateChanged(function(user){
        if (!user) {
            window.location="index.html";
        }
    });
}//isUserSignedIn


// Signs user out
function signOut() {
    firebase.auth().signOut().then(() => {
        window.location="index.html";
    }).catch((error) =>{

    });
}//signOut

 var cachelocation = [];
 
// shows current kit locations (saved on Firebase) via map markers
function displayMarker(){
    
    // coordinates for map marker
	var longi = 0;
	var lat = 0;
	
    // reads location of "markers" node on database
    firebase.database().ref("markers").once("value")
    .then(function(markerNum) {
        
        // loops through each node in "markers"
        markerNum.forEach(function(childmarkerNum) {
            
            // saves location of current map marker
            longi = childmarkerNum.child("longi").val();
            lat = childmarkerNum.child("lat").val();
			
			cachelocation.push([longi, lat]);
            
            // physically creates marker object on map 
            var marker = new mapboxgl.Marker({color: "#004949", draggable: false})
            .setLngLat([longi, lat])
            .addTo(map);
        });
    });
}

// save the location and name of new marker to database
function getLocation(lng, lat, input){
        
        // new location to be saved
        var data = {
                name: input,
                longi: lng,
                lat: lat
        };
        
        // create new child of "markers" on database with new location data
        firebase.database().ref("markers").push(data);
}