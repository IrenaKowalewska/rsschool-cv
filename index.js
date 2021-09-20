const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');
const links = document.querySelectorAll('.menu__list-link');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    overlay.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        menuList.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});