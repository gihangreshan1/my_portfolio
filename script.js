const texts = [
    "Software Engineer",
    "Web Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    currentText = texts[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {

        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const volunteerEvents = [

{
    title:"Introduction to Machine Learning for Software Engineers (SESOC)",
    role:"Event Volunteer",
    image:"images/sesoc-1.jfif",
    date:"November 2025",
    description:
    "Participated in the Introduction to Machine Learning for Software Engineers event organized by SESOC. Engaged with the session content, collaborated with fellow participants, and gained knowledge about machine learning concepts and their applications in software engineering."
},

{
    title:"Annual Grand Meeting (SESOC) 2026",
    role:"Event Volunteer",
    image:"images/sesoc-2.jfif",
    date:"January 2026",
    description:
    "Participated in the Annual Grand Meeting (SESOC) 2026 and collaborated with society members during the event. Engaged in society activities, networked with fellow members, and gained experience through involvement in the software engineering community."
},

{
    title:"QA Testing for SESOC Official Website",
    role:"QA Volunteer",
    image:"images/sesoc1.png",
    date:"August 2025",
    description:
    "As a QA Volunteer, I performed manual testing on the SESOC official website to verify functionality and identify defects. I created and executed test cases, documented issues, and reported bugs to support the development team in improving the website's quality and user experience."
}

];

const volunteerContainer = document.getElementById("volunteerContainer");

volunteerEvents.forEach(event => {

    volunteerContainer.innerHTML += `

    <div class="volunteer-card">

        <img src="${event.image}" alt="${event.title}">

        <div class="volunteer-content">

            <h3>${event.title}</h3>

            <div class="volunteer-role">${event.role}</div>

            <p>${event.description}</p>

            <span class="volunteer-date">${event.date}</span>

        </div>

    </div>

    `;

});

const footerOrganizations = [


{
    logo:"images/sesoc.webp",
    name:"SESoc",
    url:"https://your-profile.com"
},



{
    logo:"images/csoc-iee.png",
    name:"IEEE Computer Society",
    url:""
},

{
    logo:"images/ieee-logo.webp",
    name:"IEEE",
    url:"https://ieee-collabratec.ieee.org/app/p/GihanMadurapriya1161029"
}

];

const container = document.getElementById("footerOrganizations");

footerOrganizations.forEach(org=>{

container.innerHTML += `

<a class="footer-org"
href="${org.url}"
target="_blank">

<img src="${org.logo}" alt="${org.name}">

<span>${org.name}</span>

</a>

`;

});

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuBtn.classList.remove("active");

        navMenu.classList.remove("active");

    });



});


// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});

document.addEventListener("click",(e)=>{

if(

!menuBtn.contains(e.target) &&

!navMenu.contains(e.target)

){

menuBtn.classList.remove("active");

navMenu.classList.remove("active");

}

});

const themeBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = themeBtn.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    body.classList.add("light");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

themeBtn.addEventListener("click", ()=>{

    body.classList.toggle("light");

    if(body.classList.contains("light")){

        localStorage.setItem("theme","light");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","dark");

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

fetch("https://api.github.com/users/gihangreshan1")
.then(response => response.json())
.then(data => {

    document.getElementById("githubStats").innerHTML = `

        <div class="github-stat">
            <strong>Public Repositories</strong>
            <span>${data.public_repos}</span>
        </div>

        <div class="github-stat">
            <strong>Followers</strong>
            <span>${data.followers}</span>
        </div>

        <div class="github-stat">
            <strong>Following</strong>
            <span>${data.following}</span>
        </div>

        <div class="github-stat">
            <strong>Username</strong>
            <span>${data.login}</span>
        </div>

    `;

})
.catch(() => {

    document.getElementById("githubStats").innerHTML =
    "Unable to load GitHub information.";

});


const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

button.classList.add("active");

const filter = button.dataset.filter;

projectCards.forEach(card=>{

if(

filter==="all" ||

card.dataset.category===filter

){

card.classList.remove("hide");

}else{

card.classList.add("hide");

}

});

});

});

AOS.init({

    duration:1000,

    once:true,

    offset:100,

});