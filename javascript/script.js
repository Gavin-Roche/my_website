const hamburgerMenu = document.querySelector('.hamburgerMenu');
const NavMenu = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    NavMenu.classList.toggle('open');
});
