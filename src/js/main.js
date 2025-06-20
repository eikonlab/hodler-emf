import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  {
    // Burger menu
    const burger = document.querySelector(".header-burger-icon");
    const menu = document.querySelector(".header-burger-links");
    const bg = document.querySelector(".background");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      bg.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });
    bg.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      bg.classList.remove("active");
      body.classList.remove("no-scroll");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        burger.classList.remove("active");
        menu.classList.remove("active");
        bg.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    });
  }
  {
    //header down up

    const header = document.querySelector(".header-nav");

    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {
      let currentScrollPosition = window.scrollY;

      if (currentScrollPosition > lastScrollPosition) {
        header.classList.add("scrolling-down");
      } else {
        header.classList.remove("scrolling-down");
      }

      lastScrollPosition = currentScrollPosition;
    });
  }
});
