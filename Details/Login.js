// Get the modal
var signinform = document.getElementById("signin-form");
var signupform = document.getElementById("signup-form");

// Get the button that opens the modal
var btn = document.getElementById("signupBtn");
var btn1 = document.getElementById("signinBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  signupform.style.display="block"
  signinform.style.display="none"
}
btn1.onclick = function() {
  signinform.style.display="block"
  signupform.style.display="none"

}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
