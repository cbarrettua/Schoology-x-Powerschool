// ==UserScript==
// @name         Schoology x Powerschool
// @version      0.2
// @description  Adds links to Powerschool and Schoology
// @author       Collin
// @match        https://uaschools.schoology.com/*
// @match        https://ps-uar.metasolutions.net/guardian/*
// @downloadURL  https://github.com/cbarrettua/Schoology-x-Powerschool/raw/master/sxp.user.js
// @updateURL    https://github.com/cbarrettua/Schoology-x-Powerschool/raw/master/sxp.user.js
// @grant        none
// ==/UserScript==

var windowURL = window.location.href;

if(windowURL.includes("schoology") === true) {
    var newLI = document.createElement('LI');
    newLI.setAttribute("class", "primary-activities schoology-processed");
    var newA = document.createElement('A');
    newA.setAttribute("class", "clickable sExtlink-processed");
    newA.setAttribute("href", "https://ps-uar.metasolutions.net/guardian/home.html");
    var newText = document.createTextNode("Powerschool");
    newLI.appendChild(newA);
    newA.appendChild(newText);
    document.getElementById("nav_left").appendChild(newLI);
}

if(windowURL.includes("ps-uar")) {
    var newLI = document.createElement('LI');
    var newA = document.createElement('A');
    newA.setAttribute('href', 'https://uaschools.schoology.com/home');
    newLI.appendChild(newA);
    var newText = document.createTextNode('Schoology');
    newA.appendChild(newText);
    document.getElementById("tools").appendChild(newLI);
}
