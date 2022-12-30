let hamburgerMenu = document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', ()=>{
let mobilePrimary = document.querySelector('.navbar-mobile-primary');
let mobileNetral = document.querySelector('.navbar-mobile-netral');
let mobileMain = document.querySelector('.navbar-mobile');
mobilePrimary.classList.add("nav-mobile-active","mobile-active-primary")
mobileNetral.classList.add("nav-mobile-active","mobile-active-netral")
mobileMain.classList.add("nav-mobile-active","mobile-active-main")
hamburgerMenu.style.display = "none";
})
let closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', ()=>{
let mobilePrimary = document.querySelector('.navbar-mobile-primary');
let mobileNetral = document.querySelector('.navbar-mobile-netral');
let mobileMain = document.querySelector('.navbar-mobile');
mobilePrimary.classList.remove("nav-mobile-active","mobile-active-primary")
mobileNetral.classList.remove("nav-mobile-active","mobile-active-netral")
mobileMain.classList.remove("nav-mobile-active","mobile-active-main")
hamburgerMenu.style.display = "block";
})
