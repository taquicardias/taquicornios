 var config = {
    apiKey: "AIzaSyCZagtPi8bMA4iRAFdFweX7muTbjAE0XdI",
    authDomain: "tacos-login.firebaseapp.com",
    databaseURL: "https://tacos-login.firebaseio.com",
    projectId: "tacos-login",
    storageBucket: "",
    messagingSenderId: "931483734018"
  };
  firebase.initializeApp(config);

var loginWithFB = function(e){
    var provider = new firebase.auth.FacebookAuthProvider();
    login(provider);
}
var loginWithGoogle = function(e){
    var provider = new firebase.auth.GoogleAuthProvider();
    login(provider);
}
var login = function(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    document.getElementById('username').textContent = ("Hola :") + user.displayName;
    //localStorage.setItem
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log('error',errorMesage)
});
}


var fbButton = document.querySelector('.fb-login');
var googleButton = document.querySelector('.google-login');
fbButton.addEventListener('click', loginWithFB);
googleButton.addEventListener('click', loginWithGoogle);

var splash = function(){
	setTimeout(function(){
	location.href = "login.html"
	},3000);
}
$(document).ready(splash);
