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
    title:"Introduction to Machine Learning for Software Engineers organized by SESoc",
    role:"Event Volunteer",
    image:"images/sesoc-1.jfif",
    date:"November 2025",
    description:
    "Tested the official SESoc website, identified bugs, verified features, and collaborated with the development team to improve usability."
},

{
    title:"Anual Grand Meeting (SESoc) 2026",
    role:"Event Volunteer",
    image:"images/sesoc-2.jfif",
    date:"January 2026",
    description:
    "Supported participant registration, technical coordination, and event logistics while assisting teams throughout the competition."
},

{
    title:"QA Testing for SESoc  official website",
    role:"QA Volunteer",
    image:"images/sesoc-site.png",
    date:"August 2025",
    description:
    "Guided beginners through HTML, CSS, and JavaScript fundamentals while helping them build their first responsive website."
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