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

var projects = document.getElementsByClassName('project');

for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener('mouseenter', detailsVisible, false);
}

for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener('mouseleave', detailsInvisible, false);
}

function detailsVisible(e) {
  e.target.classList.add("details-visible");
  e.target.classList.remove("details-invisible");
};

function detailsInvisible(e) {
  e.target.classList.add("details-invisible");
  e.target.classList.remove("details-visible");
}

