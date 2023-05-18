let menuHamburger = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuHamburger.onclick = () => {
    menuHamburger.classList.toggle('bx-x');
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menuHamburger.classList.remove('bx-x');
    navbar.classList.remove("active");
}