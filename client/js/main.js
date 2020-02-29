// Add JS Here
var mymap = L.map('mapid').setView([48.4284, -123.3656], 13);

var marker = L.marker([48.4284, -123.3656]).addTo(mymap);

var PopupText = "This is <br> a marker <br> popup";

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/satellite-streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYWNhZGVteW93ZW4iLCJhIjoiY2s2bzcxYmloMGtneTNkbGxlcHNqeGd2bCJ9._fRTZOk7npPGoQuSJTtGFg'
}).addTo(mymap);

/*var circle = L.circle([48.4284, -123.3656], {
  color: 'blue',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 1000
}).addTo(mymap);*/

//circle.bindPopup("I am a circle.");

marker.bindPopup(PopupText);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(mymap);

L.Routing.control({
  waypoints: [
    L.latLng(48.4284, -123.3656),
    L.latLng(48.41, -123.37)
  ],
  routeWhileDragging: true
}).addTo(mymap);