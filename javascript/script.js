const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navList = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const body = document.body

hamburgerMenu.addEventListener('click', () => {
    // Check if the menu is open or closed
    if (navList.classList.contains('open')) {
        // Triggers the closing animation and disables scrolling
        navList.classList.remove('open');
        hamburgerMenu.classList.remove('open');
        body.classList.remove('noScroll');

        // After 500ms (duration of the CSS transition), set visibility to hidden this is to stop breakpoint flicker
        setTimeout(() => {
            navList.style.visibility = 'hidden';
        }, 500);
    } else {
        // Triggers the opening animation and enables scrolling
        navList.style.visibility = 'visible';
        navList.classList.add('open');
        hamburgerMenu.classList.add('open');
        body.classList.add('noScroll');
    }
});

// Ensures that the navBar is not invisible in desktop and closes the NavBar when  you transition to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        navList.style.visibility = '';

        navList.classList.remove('open');
        hamburgerMenu.classList.remove('open');
        body.classList.remove('noScroll');
    }
});

// Fades in and out the navBar background-color
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('backgroundColor');
    }
    else{
        nav.classList.remove('backgroundColor');
    }

});
    

