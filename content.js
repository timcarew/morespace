// get homepage element
let homepagecontainer = document.getElementsByClassName("homepage-container");
// get courses div
let homepage = homepagecontainer[0].children[0];
// get sidebar div
let sidebar = homepagecontainer[0].children[1];
// byebye sidebar
sidebar.style.display = "none";
// byebye announcements
homepage.children[1].style.display = "none";
// center courses and hide background color
let courses = homepage.children[0];
courses.style.position = "absolute";
courses.style.height = "500px";
courses.style.width = "900px";
courses.style.top = "50%";
courses.style.left = "50%";
courses.style.marginTop = "-250px";
courses.style.marginLeft = "-450px";
courses.style.borderBottom = "0px solid rgba(0,0,0,0)";
courses.style.backgroundColor = "rgba(0,0,0,0)";
courses.style.boxShadow = "0px 0px 0px rgba(0,0,0,0)";
// hide title
let title = homepage.children[0];
title.children[0].style.display = "none";
