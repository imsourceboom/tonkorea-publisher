// import {
//     header
// } from '../elements'

const hamburger = document.querySelector(".hamburger");
const mobileNavBack = document.querySelector(".mobile-nav-back");
const mobileNav = document.querySelector(".mobile-nav");
const close = document.querySelector(".mobile-nav .close");

const trigger = (e) => {
  mobileNav.classList.toggle("active");
  mobileNavBack.classList.toggle("active");
};

hamburger.addEventListener("click", trigger);
close.addEventListener("click", trigger);
