var btn = document.getElementById('switchModeBtn');
var isDarkMode = false;

btn.addEventListener('click', function (event) {
  console.log('clicked');
  // find main tag 
  var mainEl = document.getElementsByTagName('main');

  if (isDarkMode) {
    // change bg color to black 
    mainEl[0].style.backgroundColor = 'white';
    // change color to white 
    mainEl[0].style.color = 'black';
    event.target.innerText = 'Switch to Dark Mode';
    isDarkMode = false;
  } else {
    // change bg color to black 
    mainEl[0].style.backgroundColor = 'black';
    // change color to white 
    mainEl[0].style.color = 'white';
    event.target.innerText = 'Switch to Normal Mode';
    isDarkMode = true;
  }
});

var toggleBtn = document.getElementById('toggleBtn');
var isVisible = true;
toggleBtn.addEventListener('click', function (event) {
  // find the id para1 
  var para = document.getElementById('para1');

  if (isVisible) {
    // how to hide html element in js 
    para.style.display = 'none';
    // how to remove class from element in js 'btn-danger'
    // how to add calss in element in js 'btn-success' 
    toggleBtn.classList.remove('btn-danger');
    toggleBtn.classList.add('btn-success');
    toggleBtn.innerText = 'Show';
    isVisible = false;
  } else {
    // how to show html element in js 
    para.style.display = 'block';
    toggleBtn.classList.remove('btn-success');
    toggleBtn.classList.add('btn-danger');
    toggleBtn.innerText = 'Hide';
    isVisible = true;
  }
});

var addElBtn = document.getElementById('addElementBtn');
addElBtn.addEventListener('click', function () {
  var c = document.getElementById("elementPlaceholder").children.length + 1;
  var para = document.createElement("p");
  para.innerText = "This is a paragraph " + c;
  document.getElementById("elementPlaceholder").appendChild(para);
  if (c >= 5) {
    addElBtn.disabled = true;
  }
});

function openCustomizedWindow(event) {
  console.log(this);
  console.log(this == window);
  //customization starts
  //window.open("https://www.google.com", "_blank", "toolbar=no, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
}

var randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', function (e) {
  console.log(this);
});


// for Contact page 
//====

function loadDataHandler() {
  console.log('Before Loading Data');
  // ajax 
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    console.log(this);
    if (this.readyState == 4) {
      console.log('Got Response');
      console.log(this.response);
    }
    console.log('Inside onreadystatechange');
  }
  xhttp.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
  xhttp.send();
}

function saveContactHandler(event) {
  event.preventDefault(); // will prevent default nature of the event 
  var _name = document.getElementById('inputName').value;
  var _email = document.getElementById('inputEmail').value;
  var _message = document.getElementById('inputMessage').value;
  console.log(_name, _email, _message);

  // constructing JSON
  var myData = {
    name: _name,
    email: _email,
    message: _message
  };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    console.log(this);
    if (this.readyState == 4) {
      console.log('Got Response');
      console.log(this.response);
      console.log(typeof this.response);
      var myResp = JSON.parse(this.response);
      console.log(typeof myResp);
      if (myResp.id == 11) {
        alert("Saved Successfully");
      } else {
        alert('Some error occured');
      }
    }
    console.log('Inside onreadystatechange');
  }
  xhttp.open("POST", 'https://jsonplaceholder.typicode.com/users', true);
  xhttp.send(myData);
}


function onLocationAllowHandler(position){
  console.log(position);
  var myLocationDiv = document.getElementById('myLocation');
  myLocationDiv.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function onLocationDenyHandler(){
  alert('denied location access');
}

function findLocationHandler(){
  //check browser support for geolocation 
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onLocationAllowHandler, onLocationDenyHandler);
  }else{
    alert('This browser will not support for geolocation')
  }
}