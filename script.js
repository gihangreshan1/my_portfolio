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
    image:"images/sesoc-site.png",
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
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});