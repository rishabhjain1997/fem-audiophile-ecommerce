const hamburgerElement = document.querySelector('.header--hamburger')
const headerMenuElement = document.querySelector('.header--menu')
const overlayElement = document.querySelector('.overlay')
const bodyElement = document.querySelector('body')
const header = document.querySelector('.header')
const sticky = header.offsetTop;


hamburgerElement.addEventListener('click',
    (e) => {
        if (hamburgerElement.classList.contains('toggle-menu-open')) {
            console.log('Close menu')
            hamburgerElement.classList.remove('toggle-menu-open')
            headerMenuElement.classList.remove('menu-open')
            overlayElement.classList.remove('menu-open')

        } else {
            console.log('Open menu')
            hamburgerElement.classList.add('toggle-menu-open')
            headerMenuElement.classList.add('menu-open')
            overlayElement.classList.add('menu-open')

        }
    })



/* MAKE HEADER STICKY */

// When the user scrolls the page, execute the function
window.onscroll = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}