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
  {
    // section about - Scroll animations
    
    const aboutText = document.querySelectorAll(".about-text");
    const aboutBg = document.querySelector("#about-bg");
    

    // Desktop animations
    if (window.innerWidth > 768) {

      // Animate the text in the about section
      gsap.from(aboutText, {
        y: 100,
        skewX: -5,
        opacity: 0,
        duration: 1,
        stagger: 2,
        scrollTrigger: {
          trigger: aboutText,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      });
  
      // Animate the background in the about section
      gsap.from(aboutBg, {
        y: "100%",
        skewX: 10,
        scrollTrigger: {
          trigger: aboutBg,
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
          markers: false,
        },
      });

    }
    // Mobile animations
    else {
      // Animate the text in the about section
      gsap.from(aboutText, {
        y: 100,
        skewX: 10,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: aboutText,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      });

      // Animate the background in the about section
      gsap.from(aboutBg, {
        y: "100%",
        scrollTrigger: {
          trigger: aboutBg,
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
          markers: false,
        },
      });
    }

    // Animate the title in the about section (title is big text after text of about section)
    const aboutTitle = document.querySelectorAll(".about-title");
    const aboutTitleContainer = document.querySelector(".about-title-container");

    gsap.from(aboutTitle, {
      y: 100,
      skewX: 10,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: aboutTitleContainer,
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      },
    });


    // animate the text exposition of the about section
    const aboutExposition = document.querySelectorAll(".about-exposition");

    // Desktop animations for exposition
    if (window.innerWidth > 768) {
      gsap.from(aboutExposition, {
        y: 100,
        skewX: 10,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutExposition,
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
          markers: true,
        },
      });
    }
    // Mobile animations for exposition
    else {
      gsap.from(aboutExposition, {
        y: 100,
        skewX: 10,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutExposition,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
      });
    }
  }
});
