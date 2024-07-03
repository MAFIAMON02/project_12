window.addEventListener("scroll", function () {
   
    const header = document.querySelector("header");
    header.classList.toggle("navbar-scrolled", window.scrollY > 0);
});


const mobile = document.querySelector('.mobile')
const header = document.querySelector('.header')

const press = () => {
    header.classList.toggle("active");
}

mobile.addEventListener('click', () => press())
