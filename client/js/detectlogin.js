
function detectlogin() {
if (getCookie("userAuth")) {
    // User already logged in
    console.log("You are logged in");
} else {
    window.location.href = "registerlocation.html";
};
}

