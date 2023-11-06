const iconMobile =document.querySelector('.icon-mobile');
const navLinks = document.getElementById('nav-links');


iconMobile.addEventListener('click', () => {
    console.log();

    navLinks.classList.remove('nav-links');
    navLinks.classList.add('nav-show');})



