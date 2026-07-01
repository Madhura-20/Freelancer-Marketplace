function registerUser() {

let name = document.getElementById("name").value.trim();

let email = document.getElementById("email").value.trim();

let password = document.getElementById("password").value;

let confirmPassword = document.getElementById("confirmPassword").value;


// Check empty fields

if(name === "" || email === "" || password === "" || confirmPassword === ""){

alert("Please fill all fields.");

return;

}


// Email validation

if(!email.includes("@") || !email.includes(".")){

alert("Please enter a valid email.");

return;

}


// Password length

if(password.length < 6){

alert("Password must contain at least 6 characters.");

return;

}


// Confirm password

if(password !== confirmPassword){

alert("Passwords do not match.");

return;

}


// Save data

localStorage.setItem("name", name);

localStorage.setItem("email", email);

localStorage.setItem("password", password);


alert("Registration Successful!");

window.location.href = "login.html";

}


/*login*/
function loginUser() {

let email = document.getElementById("loginEmail").value.trim();

let password = document.getElementById("loginPassword").value;

let savedEmail = localStorage.getItem("email");

let savedPassword = localStorage.getItem("password");


// Check empty fields

if(email === "" || password === ""){

alert("Please enter Email and Password.");

return;

}


// Check email format

if(!email.includes("@") || !email.includes(".")){

alert("Please enter a valid email.");

return;

}


// Validate credentials

if(email === savedEmail && password === savedPassword){

alert("Login Successful!");

localStorage.setItem("loggedInUser", localStorage.getItem("name"));

window.location.href = "dashboard.html";

}
else{

alert("Invalid Email or Password.");

}

}

/*Profile page*/
function saveProfile() {

let name = document.getElementById("profileName").value.trim();
let email = document.getElementById("profileEmail").value.trim();
let phone = document.getElementById("profilePhone").value.trim();
let skills = document.getElementById("profileSkills").value.trim();
let experience = document.getElementById("profileExperience").value.trim();
let rate = document.getElementById("profileRate").value.trim();
let location = document.getElementById("profileLocation").value.trim();
let about = document.getElementById("profileAbout").value.trim();

if(name==="" || email==="" || phone==="" || skills==="" || experience==="" || rate==="" || location==="" || about===""){
    alert("Please fill all fields.");
    return;
}

if(!email.includes("@") || !email.includes(".")){
    alert("Enter a valid email.");
    return;
}

if(phone.length != 10 || isNaN(phone)){
    alert("Phone number must contain exactly 10 digits.");
    return;
}

localStorage.setItem("profileName", name);
localStorage.setItem("profileEmail", email);
localStorage.setItem("profilePhone", phone);
localStorage.setItem("profileSkills", skills);
localStorage.setItem("profileExperience", experience);
localStorage.setItem("profileRate", rate);
localStorage.setItem("profileLocation", location);
localStorage.setItem("profileAbout", about);

alert("Profile Saved Successfully!");
}

function loadProfile(){

if(document.getElementById("profileName")){

document.getElementById("profileName").value =
localStorage.getItem("profileName") || "";

document.getElementById("profileEmail").value =
localStorage.getItem("profileEmail") || "";

document.getElementById("profilePhone").value =
localStorage.getItem("profilePhone") || "";

document.getElementById("profileSkills").value =
localStorage.getItem("profileSkills") || "";

document.getElementById("profileExperience").value =
localStorage.getItem("profileExperience") || "";

document.getElementById("profileRate").value =
localStorage.getItem("profileRate") || "";

document.getElementById("profileLocation").value =
localStorage.getItem("profileLocation") || "";

document.getElementById("profileAbout").value =
localStorage.getItem("profileAbout") || "";

}

}


// Display welcome message on Dashboard
function displayWelcome() {

    let userName = localStorage.getItem("name");

    if (userName) {
        let welcome = document.getElementById("welcomeUser");

        if (welcome) {
            welcome.innerHTML = "Welcome, " + userName + " 👋";
        }
    }

}



window.onload = function(){

displayWelcome();

loadProfile();

};

/* Logout */

function logoutUser() {

let choice = confirm("Are you sure you want to logout?");

if(choice){

alert("Logged out successfully.");

window.location.href = "index.html";

}

}