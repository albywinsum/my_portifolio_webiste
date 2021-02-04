// Selecting DOM elements

const navToggle = document.querySelector('.nav__toggle');
const navigation = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

// Add click event Listener to the selected elements

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('close');
    navToggle.style.outline = 'none';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('close');
        //navigation.style.transitionDelay = '0s';
    });
});