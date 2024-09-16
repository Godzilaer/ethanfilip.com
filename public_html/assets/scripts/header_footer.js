const header = document.body.querySelector("header");
const headerHTML = 
`<div class="header-title-logo-holder">
    <a href="/">
        <img src="/assets/images/logo_circle.png" class="header-logo">
    </a>
    
    <h1>The Ethan Web</h1>
</div>

<nav>
    <ul>
        <li><a class="header-nav-button first-a"href="/">Home</a></li>
        <li><a class="header-nav-button" href="/games">Games</a></li>
        <li><a class="header-nav-button" href="/tools">Tools</a></li>
        <li><a class="header-nav-button" href="/current-projects">Current Projects</a></li>
    </ul>
</nav>`

header.innerHTML += headerHTML;

const copyrightText = document.body.querySelector("#copyright");

var originalYear = 2024;
var currentYear = new Date().getFullYear();
var year = currentYear == originalYear ? originalYear : originalYear + "-" + currentYear;

copyrightText.innerHTML = `© ${year} Ethan Filip. All rights reserved.`;