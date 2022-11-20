var a=document.getElementById('nav-icon3');
a.addEventListener('click',doIt);
 function doIt(){
  var element = document.getElementById("nav-icon3");
  element.classList.toggle("open");

  var menuView = document.getElementById("mobile-menu-container");
  menuView.classList.toggle("menu-view");
}



