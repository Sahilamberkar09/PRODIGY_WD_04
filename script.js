const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");
const wrapper = document.querySelector(".site-wrapper");
const mNavLinks = document.querySelector(".mobile-navbar");

const home = document.querySelector(".mob-home");
const about = document.querySelector(".mob-about");
const projects = document.querySelector(".mob-projects");
const skills = document.querySelector(".mob-skills");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  wrapper.classList.toggle("site-wrapper-active");
  mNavLinks.classList.toggle("mobile-navbar-active");

  let hamChild = hamburger.firstElementChild;
  if (wrapper.classList.contains("site-wrapper-active")) {
    hamChild.classList.replace("fa-bars", "fa-xmark");
  } else {
    hamChild.classList.replace("fa-xmark", "fa-bars");
  }
});

home.addEventListener("click", () => {
  navLinks.classList.remove("active");
  wrapper.classList.remove("site-wrapper-active");
  mNavLinks.classList.remove("mobile-navbar-active");
  let hamChild = hamburger.firstElementChild;
  hamChild.classList.replace("fa-xmark", "fa-bars");
});

about.addEventListener("click", () => {
  navLinks.classList.remove("active");
  wrapper.classList.remove("site-wrapper-active");
  mNavLinks.classList.remove("mobile-navbar-active");
  let hamChild = hamburger.firstElementChild;
  hamChild.classList.replace("fa-xmark", "fa-bars");
});

projects.addEventListener("click", () => {
  navLinks.classList.remove("active");
  wrapper.classList.remove("site-wrapper-active");
  mNavLinks.classList.remove("mobile-navbar-active");
  let hamChild = hamburger.firstElementChild;
  hamChild.classList.replace("fa-xmark", "fa-bars");
});

skills.addEventListener("click", () => {
  navLinks.classList.remove("active");
  wrapper.classList.remove("site-wrapper-active");
  mNavLinks.classList.remove("mobile-navbar-active");
  let hamChild = hamburger.firstElementChild;
  hamChild.classList.replace("fa-xmark", "fa-bars");
});
