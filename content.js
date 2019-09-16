// get homepage element
let homepagecontainer = document.getElementsByClassName("homepage-container");
// get courses+annoucements div
let homepage = homepagecontainer[0].children[0];
// get sidebar div
let sidebar = homepagecontainer[0].children[1];
// byebye sidebar
sidebar.style.display = "none";
// center courses+announcements
homepage.style.position = "relative";
homepage.style.left = "50%";
homepage.style.transform = "translateX(-50%)";
homepage.style.display = "grid";
homepage.style.gridTemplateColumns = "2fr 1fr";
homepage.style.gridGap = "2rem";
homepage.style.width = "100%";
// hide title
let title = homepage.children[0];
title.children[0].style.display = "none";
