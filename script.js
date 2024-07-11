const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");
const wrapper = document.querySelector(".site-wrapper");
const mNavLinks = document.querySelector(".mobile-navbar");

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
