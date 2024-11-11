//to open Nav
const openNav = document.querySelector('.bi-list');
//to close nav
const closeNav = document.querySelector('.bi-x');
//list of nav
const navList = document.querySelector('nav ul');

document.querySelector('nav ul li a').style.color = 'white';

openNav.addEventListener('click', () => {
        navList.style.top = '30%';
        openNav.style.display = 'none';
        closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
    navList.style.top = '-30%';
    openNav.style.display = 'block';
    closeNav.style.display = 'none';
});

