const menu = document.getElementById('menu-icon');
const navbar = document.querySelector('.navBar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}