// get homepage element 
let homepagecontainer = document.getElementsByClassName("homepage-container");

// hide the sidebar
let sidebar = homepagecontainer[0].children[1];
sidebar.style.display = "none";

// hide the dashboard
let dashboard = homepagecontainer[0].children[0].children[0]
dashboard.style.display = "none";

// hide the announcements
let announcements = homepagecontainer[0].children[0].children[2]
announcements.style.display = "none";

// center courses
let courses = homepagecontainer[0].children[0].children[1];
courses.style.position = "absolute";
courses.style.height = "500px";
courses.style.width = "900px";
courses.style.top = "50%";
courses.style.left = "50%";
courses.style.marginTop = "-250px";
courses.style.marginLeft = "-450px";