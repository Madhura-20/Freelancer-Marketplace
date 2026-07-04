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

let toast = new bootstrap.Toast(document.getElementById("profileToast"));

toast.show();
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

let bids = localStorage.getItem("totalBids") || 0;

let activeBids = document.getElementById("activeBids");

if(activeBids){
    activeBids.innerHTML = bids;
}

}


/* Bid Function */

function submitBid(button){

    let card = button.closest(".project-card");

    let status = card.querySelector(".status");

    status.innerHTML = "Status: Bid Submitted";

    button.innerHTML = "Bid Submitted";

    button.disabled = true;

    button.style.backgroundColor = "gray";

    let totalBids = Number(localStorage.getItem("totalBids")) || 0;

    totalBids++;

    localStorage.setItem("totalBids", totalBids);

    let modal = new bootstrap.Modal(document.getElementById("bidModal"));

    modal.show();

}

/* Contact Form */

function sendMessage(){

let name = document.getElementById("contactName").value.trim();

let email = document.getElementById("contactEmail").value.trim();

let message = document.getElementById("contactMessage").value.trim();

if(name === "" || email === "" || message === ""){

alert("Please fill all the fields.");

return false;

}

if(!email.includes("@") || !email.includes(".")){

alert("Please enter a valid email.");

return false;

}

localStorage.setItem("contactName", name);

localStorage.setItem("contactEmail", email);

localStorage.setItem("contactMessage", message);

alert("Message Sent Successfully!");

document.getElementById("contactName").value = "";

document.getElementById("contactEmail").value = "";

document.getElementById("contactMessage").value = "";

return false;

}

/* Search Projects */

function searchProjects(){

let input = document.getElementById("projectSearch");

if(input == null){
    return;
}

let filter = input.value.toUpperCase();

let projects = document.getElementsByClassName("search-item");

for(let i = 0; i < projects.length; i++){

    let text = projects[i].innerText.toUpperCase();

    if(text.indexOf(filter) > -1){

        projects[i].style.display = "block";

    }

    else{

        projects[i].style.display = "none";

    }

}

}

/* Filter Projects */

function filterProjects(category){

let projects = document.getElementsByClassName("search-item");

for(let i=0; i<projects.length; i++){

let text = projects[i].innerText.toLowerCase();

if(category == "all"){

projects[i].style.display = "block";

}

else if(text.includes(category)){

projects[i].style.display = "block";

}

else{

projects[i].style.display = "none";

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

/* Hire Freelancer */

function hireFreelancer(button){

button.innerHTML = "Hired";

button.disabled = true;

button.style.background = "gray";

let hired = Number(localStorage.getItem("totalHired")) || 0;

hired++;

localStorage.setItem("totalHired", hired);

let modal = new bootstrap.Modal(document.getElementById("hireModal"));

modal.show();

}

/* Release Payment */

function releasePayment(button){

button.innerHTML = "Payment Released";

button.disabled = true;

button.classList.remove("btn-success");

button.classList.add("btn-secondary");

let payments = Number(localStorage.getItem("totalPayments")) || 0;

payments++;

localStorage.setItem("totalPayments", payments);

let modal = new bootstrap.Modal(document.getElementById("paymentModal"));

modal.show();

}
