var navArea = document.getElementById('nav-container');
const navBreakpoint = 100;
window.onscroll = function () { 
    "use strict";
    if (window.pageYOffset < navBreakpoint) {
      navArea.classList.add("background-transparent");
      navArea.classList.remove("background-colored");
    } 
    else if (window.pageYOffset >= navBreakpoint) {
      navArea.classList.add("background-colored");
      navArea.classList.remove("background-transparent");
    } else {
      navArea.classList.add("background-transparent");
      navArea.classList.remove("background-colored");
    }
};


