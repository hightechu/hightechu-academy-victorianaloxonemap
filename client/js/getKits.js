function getKits() {
    // If user is not logged in -> send to login/register page
    // Else inform user of their data
    responseStatus = function (response, status) {
    for(var i = 0; i < response.length; i++)
    {
          //var marker = L.marker([response[i].latitude, response[i].longitude]).addTo(mymap);
          //marker.bindPopup(response[i].name);
      }
    }
  
    // Connect to the API
    connectAPI("kits", "GET", responseStatus);
  }
  