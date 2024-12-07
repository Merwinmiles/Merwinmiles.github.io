function togglebox() {
    if(document.getElementById("left").style.display === "block") {
        document.getElementById("left").style.display = "none";
    }
    else {
        document.getElementById("left").style.display = "block";
    }
}

function loginBox() {
    if(document.getElementById("login-box").style.display === "block") {
        document.getElementById("login-box").style.display = "none";
    }
    else {
        document.getElementById("login-box").style.display = "block";
    }
}

function sidebar() {
    if(document.getElementById("left").style.display === "block") {
        document.getElementById("left").style.display = "none";
    }
    else {
        document.getElementById("left").style.display = "block";
    }
}

function login() {
    const body = {
      "username": username.value,
      "password": password.value
    }
  
    console.log(body);

    if (body.username === "testAndy" && body.password === "1234") {
        document.getElementById("account-page").style.display= "block";
        document.getElementById("login-box").style.display= "none";

      } 
      else {
        login_messages.innerText = "Wrong Username or Password"
      }
}

function home() {
    document.getElementById("account-page").style.display="none"
    physicalTherapy.style.display='none';
    youthProgram.style.display='none';
    donations.style.display='none';
    contact.style.display='none';
    physicalTherapy.style.display='none';
    console.log("working")
}



function showit(var1) {

    let contact = document.getElementById('contact-page')
    let donations = document.getElementById('donations-page')
    let youthProgram = document.getElementById('youthProgram-page')
    let physicalTherapy = document.getElementById('physicalTherapy-page')
    
    physicalTherapy.style.display='none';
    youthProgram.style.display='none';
    donations.style.display='none';
    contact.style.display='none';
    physicalTherapy.style.display='none';

  const page = document.getElementById(var1);
  if (page) {
    page.style.display = 'block';
  }
}


let contact = document.getElementById('contact-page')
let donations = document.getElementById('donations-page')
let youthProgram = document.getElementById('youthProgram-page')
let physicalTherapy = document.getElementById('physicalTherapy-page')
let username = document.getElementById("myusername");
let password = document.getElementById("mypassword");
let login_messages = document.getElementById("login-messages")