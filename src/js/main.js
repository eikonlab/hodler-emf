import gsap, { random } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  {
    // Burger menu
    const burger = document.querySelector(".header-burger-icon");
    const menu = document.querySelector(".header-burger-links");
    const menuLinks = document.querySelectorAll(".header-burger-link");
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

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          burger.classList.remove("active");
          menu.classList.remove("active");
          bg.classList.remove("active");
          body.classList.remove("no-scroll");
        }, 200);
      });
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
    // carrousel
    const carrousel = document.querySelector(".artiste-carrousel");
    const items = document.querySelectorAll(".artiste-carrousel-item");

    function getItemWidthIncludingMargin() {
      const style = getComputedStyle(items[0]);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return items[0].offsetWidth + margin;
    }

    function isAtEnd() {
      return (
        Math.ceil(carrousel.scrollLeft + carrousel.offsetWidth) >=
        carrousel.scrollWidth
      );
    }

    function isAtStart() {
      return carrousel.scrollLeft <= 0;
    }

    // NEXT (right)
    document.querySelector(".next").addEventListener("click", () => {
      const scrollAmount = getItemWidthIncludingMargin();
      if (isAtEnd()) {
        carrousel.scrollTo({ left: 0, behavior: "smooth" }); // Go to start
      } else {
        carrousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    });

    // PREV (left)
    document.querySelector(".prev").addEventListener("click", () => {
      const scrollAmount = getItemWidthIncludingMargin();
      if (isAtStart()) {
        carrousel.scrollTo({ left: carrousel.scrollWidth, behavior: "smooth" }); // Go to end
      } else {
        carrousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    });
  }

  {
    //random translate for artiste thumb name mobile

    const names = document.querySelectorAll(".artiste-thumb-name.mobile");

    names.forEach((name) => {
      gsap.set(name, {
        x: "random(-50, 50)px",
        y: "random(-10, 30)px",
      });
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
    const aboutTitleContainer = document.querySelector(
      ".about-title-container"
    );

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
          markers: false,
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

  {
    // Popup
    const thumbs = document.querySelectorAll(".artiste-thumb");
    const popups = document.querySelectorAll(".artiste-popup");
    const bgPop = document.querySelector(".background.artiste");
    const body = document.querySelector("body ");
    const application = document.querySelector(".application");

    thumbs.forEach((thumb) => {
      const value = thumb.dataset.value;
      console.log("ok");

      thumb.addEventListener("click", () => {
        console.log("okdasd");
        popups.forEach((popup) => popup.classList.remove("open"));

        popups.forEach((popup) => {
          if (popup.classList.contains(value)) {
            popup.classList.add("open");
            bgPop.classList.add("active");
            body.classList.add("no-scroll");
            application.classList.add("invisible");
          }

          const closeBtn = popup.querySelector(".artiste-close-btn-cont");

          if (closeBtn) {
            closeBtn.addEventListener("click", (e) => {
              e.stopPropagation(); // prevent bubbling
              popup.classList.remove("open");
              bgPop.classList.remove("active");
              body.classList.remove("no-scroll");
              application.classList.remove("invisible");
            });
          }
          bgPop.addEventListener("click", () => {
            popup.classList.remove("open");
            bgPop.classList.remove("active");
            body.classList.remove("no-scroll");
            application.classList.remove("invisible");
          });
        });
      });
    });
  }

  {
    // Artiste section anim
    const sky = document.querySelector(".sky");
    const moutains = document.querySelector(".moutains");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#artistes",
        start: "top 60%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.fromTo(
      sky,
      {
        opacity: 0,
      },
      {
        opacity: 0.5,
      }
    );

    tl.from(
      moutains,
      {
        y: 100,
      },
      "<"
    );
    if (window.innerWidth > 768) {
      tl.from(
        ".artistes-title",
        {
          y: 100,
        },
        "<0.3"
      );
      tl.from(
        ".artiste-thumb.desktop",
        {
          y: 200,
          stagger: 0.2,
        },
        "<0.3"
      );
    }
  }
});
