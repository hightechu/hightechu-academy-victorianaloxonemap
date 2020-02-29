// createAccount
function createKit() {
    // If the response has an error -> inform user
    // Else is successful -> inform user
    responseStatus = function (response, status) {
      if ('error' in response) {
        // Inform User of Error
        console.log("{0}: {1}".format(status, response.error.message));
      }
      else {
        // Kit Created Successfully
        console.log("Kit created successfully!");
        alert("kit created successfully")
        // Redirect User to Homepage
        window.location = "/";
      }
    }
  
    // Grab data from login-register page
    var jsonObj = new Object();
    jsonObj.latitude = document.getElementById("latitude").value;
    jsonObj.longitude = document.getElementById("longitude").value;
    jsonObj.name = document.getElementById("name").value;
  
    // Connect to the API
    connectAPI("kits", "POST", responseStatus, jsonObj);
  }