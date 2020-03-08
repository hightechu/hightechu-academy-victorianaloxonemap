function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("adminEmailLogin").value;
  var inputValpass = document.getElementById("adminPasswordLogin").value;

  if (inputVal === "adminViNaKiMa@admin.ca" && inputValpass === "?hIghTkU4@!") {
    window.location = "/adminloggedin.html";
  } else {
    alert('Admin Access Denied')
  }
}