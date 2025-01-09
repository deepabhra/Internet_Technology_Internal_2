//~~~~~~~~~~ Active element in navbar Animation ~~~~~~~~~~

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ~~~~~~~~~~ Menu icon works ~~~~~~~~~~

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ~~~~~~~~~~ Import TypedJS ~~~~~~~~~~

const typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Photographer", "Editor"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
})

// ~~~~~~~~~~ Dark Mode ~~~~~~~~~~

const themeButton = document.getElementById('switch-theme');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
