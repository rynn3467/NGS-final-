// script.js

// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Animations on scroll
const elementsToShow = document.querySelectorAll('.animation-on-scroll');

const scrollAnimation = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    elementsToShow.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

scrollAnimation(); // Initial check for elements already in view

// Interactive elements for the Jib platform
// Add more interactivity below as per the Jib platform requirements