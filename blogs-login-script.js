/* 
 * FRONT END: https://www.website-with-login.com
 * LOGIN URL: https://www.website-with-login.com/wp-login.php
 * ADMIN URL: https://www.website-with-login.com/wp-admin/index.php
 */

//============================
// CURRENT PAGE VARIABLES
//============================

// [VARIABLE]
var thisPage = document.location.host;

// [LOG] 
console.log(thisPage);

// [LOGIC]
if (thisPage == "www.website.com") {

    // [LOG] - "We are currently on ATTORNEY's blog."
    console.log("We are currently on ATTORNEY's blog.");

    // Setup child variable.
    var thisPage

    // [CHILD] - thisPage 
    console.log(thisPage);
} else {
    console.log("We are currently on XYZ blog.");
}

//===========================================================
// BLOG LOGIN LOGIC
// 
// https://scripts.joeyprettyman.com/js/blogs-login.js
// *://www.website-with-login.com/*
//===========================================================
document.getElementById("user_login").value = "UserNameHere";
document.getElementById("user_pass").value = "PasswordHere";
document.getElementById("loginform").submit();