var colorMode = "dark";
var loginHTML = `
  <div id="login">
    <h1 id="login_text">Welcome to<br>Course Manager</h1>
    <form id="login_form" action="index.html" method="post">
      <input id="host" class="input_text" type="text" autocomplete="off" placeholder="Host">
      <input id="username" class="input_text" type="text" autocomplete="off" placeholder="Username">
      <input id="password" class="input_text" type="password" autocomplete="off" placeholder="Password">
      <input id="login_button" class="button" type="button" onclick="validate()" value="LOGIN">
    </form>
  </div>
  `;
var appHTML = `
<div id="app">
  <div id="app_header">
    <input id="logout" type="button" onclick="logout()" value="LOGOUT">
    <h2 id="welcome">Welcome </h2>
  </div>
  <form id="search_form" onsubmit="search();return false" method="post">
    <input id="searchbar" type="text" autocomplete="off" placeholder="Search...">
  </form>
  <div id="info"></div>
</div>
  `;
var name = "Alumno";


function colorSwitch(){
  if(colorMode == "ligth"){
    document.getElementById('css_style').href = "assets/css/darkmode.css";
    colorMode = "dark";
  } else if (colorMode == "dark"){
    document.getElementById('css_style').href = "assets/css/ligthmode.css";
    colorMode = "ligth";
  }
}

function validate(){
  goToApp();
}

function logout(){
  goToLogin();
}

function goToLogin(){
  document.getElementById("main").innerHTML = loginHTML;
}

function goToApp(){
  document.getElementById("main").innerHTML = appHTML;
  document.getElementById("welcome").innerHTML += name;
}

function search(){
  document.getElementById("searchbar").value = "";
}
