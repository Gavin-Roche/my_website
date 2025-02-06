const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    // Check if the menu is open or closed
    if (navLinks.classList.contains('open')) {
        // Triggers the closing animation
        navLinks.classList.remove('open');
        hamburgerMenu.classList.remove('open');

        // After 500ms (duration of the CSS transition), set visibility to hidden this is to stop breakpoint flicker
        setTimeout(() => {
            navLinks.style.visibility = 'hidden';
        }, 500);
    } else {
        // Triggers the opening animation
        navLinks.style.visibility = 'visible';
        navLinks.classList.add('open');
        hamburgerMenu.classList.add('open');
    }
});

// Ensures that the navBar is not invisible in desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        navLinks.style.visibility = '';
    }
});
