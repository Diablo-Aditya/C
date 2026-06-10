gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there'i a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var d = document.querySelector("#left");
var a = document.querySelector("#right");
var up = document.getElementsByClassName("up");
function diablo1() {
  gsap.from(".up", {
    x: 50,
    duration: 2,
    delay: 1,
  });

  console.log("hi");
  window.addEventListener("load", () => {
    gsap.to(".write2", {
      x: 700,
      y: 425,
      duration: 2,
      scrollTrigger: {
        trigger: "#p1",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",

        scrub: 2,
      },
    });
  });
  gsap.to(".page1Side h3", {
    opacity: 1,
    stagger: 1,
    duration: 3,
    scrollTrigger: {
      trigger: ".page1-2",
      scroller: "#main",
      start: "top 20%",
      end: "top 5%",

      scrub: 2,
    },
  });
  gsap.from(".nav6", {
    opacity: 0,
    x: 20,
    duration: 1,
    delay: 5,
  });
  gsap.to(".page1Side", {
    opacity: 1,
    height: "100vh",
    duration: 3,
    scrollTrigger: {
      trigger: ".page1-2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.from(".heading", {
    opacity: 0,
    duration: 2,
    delay: 5,
    scrollTrigger: {
      trigger: "#p1",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.to("#p1", {
    duration: 1,
    delay: 1,
    backgroundColor: "#111111",
    scrollTrigger: {
      trigger: "#p1",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.to("#p3", {
    duration: 1,
    delay: 1,
    backgroundColor: "#000000",
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.to(".kr", {
    duration: 1,
    delay: 1,
    backgroundColor: "#000000",
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });

  gsap.to(".h", {
    duration: 5,
    delay: 2,
    borderBottom: "5px solid #B4835B",
    scrollTrigger: {
      trigger: "#p4",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });

  gsap.to(".do", {
    duration: 2,
    delay: 0.25,
    opacity: 1,
    fill: "white",
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 10%",
      end: "top 0%",
    },
  });
  gsap.to(".svg3", {
    duration: 5,
    delay: 2,
    fill: "white",
    opacity: 1,
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "top 47%",
    },
  });
  gsap.from(".qd", {
    y: 120,
    opacity: 0,
    color: "white",
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#p2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.from(".writing", {
    y: 120,
    opacity: 0,
    color: "white",
    stagger: 1,
    duration: 4,
    scrollTrigger: {
      trigger: "#p1",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  let v = document.getElementsByClassName("ho");
  let g = document.getElementsByClassName("overlay-button");

  console.log(v);
  g[0].onclick = () => {
    v[0].style.animation = "textanimation 4s ease-in-out 2s forwards";
    console.log("hi");
  };
}
diablo1();
function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
swiper();
var egg = gsap.timeline();
egg.from(".rko", {
  x: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
setTimeout(() => {
  egg.to(".rko", {
    opacity: 0,
    duration: 1,
    x: -20,
    stagger: 0.3,
  });
}, 3000);

setTimeout(() => {
  egg.to("#loader", {
    opacity: 0,
  });
  egg.to("#loader", {
    display: "none",
  });
}, 4000);
setTimeout(() => {
  gsap.from("#content .peace h3 span", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    delay: 1,
  });
}, 5000);
function diablo2() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "top 5%",
      end: "top -10%",

      scrub: 2,
    },
  });
  gsap.to(".kr", {
    opacity: 0,
    delay: 1,
    boxShadow: "0 0 10px #fff",
    duration: 4,
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 30%",
      end: "top 20%",
      scrub: 2,
    },
  });
  gsap.to(".vido", {
    duration: 2,
    opacity: 1,
    delay: 1,
    scale: 1.5,
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 5%",
      end: "top 0%",
      scrub: 2,
    },
  });
  gsap.to("#vo", {
    duration: 4,
    opacity: 1,
    delay: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.to(".lm", {
    y: -10,
    duration: 4,
    opacity: 1,
    delay: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: "#p3",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",

      scrub: 2,
    },
  });
  gsap.to(".p1header h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 2,
    stagger: 1,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "#main",
      start: "top 30%",
      end: "top 20%",

      scrub: 2,
    },
  });
  tl.to(".ho", {
    delay: 1,
    y: -10,
    duration: 5 * 0.6,
    opacity: 1,
    strokeDashoffset: 0,
  });
  tl.to(".ho", {
    delay: 1,
    duration: 5 * 0.4,
    fill: "#ffffffff",
  });
}
diablo2();
function diablo3() {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "hop",
      "M0,0 C0.354,0 0.464,0.133 0.498,0.502 C0.532,0.872 0.651,1 1,1"
    );

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".link");
    const socialParagraphs = document.querySelectorAll(".socials p");
    const headerTitle = document.querySelector(".headerg h1"); // Select the H1 itself
    const headerTitleSpans = document.querySelectorAll(".headerg h1 span");
    const videoWrapper = document.querySelector(".video-wrapper");
    const nikeLogoLink = document.querySelector(".nike-logo-link"); // New: Select the SVG link wrapper
    const nikeLogoPath = document.querySelector(".nike-logo .op"); // New: Select the SVG path itself
    let isAnimating = false;

    // Ensure menu starts in a closed state, appearing from below
    if (menu) {
      gsap.set(menu, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Fully clipped shut from bottom
        pointerEvents: "none",
      });
    }

    const splitTextIntoSpans = (selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const text = element.innerText || "";
        const splitText = text
          .split("")
          .map(function (char) {
            return char === " "
              ? "<span>&nbsp;</span>"
              : `<span>${char}</span>`;
          })
          .join("");
        element.innerHTML = splitText;
      });
    };

    try {
      splitTextIntoSpans(".header h1");
    } catch (error) {
      console.warn("Text splitting failed for .header h1:", error);
    }

    // --- NEW: Add dynamic border elements to video wrapper ---
    // We'll create 4 simple div elements for the border animation.
    // This is the minimum to create a sophisticated effect without relying on CSS borders directly.
    const createVideoBorderElements = () => {
      if (!videoWrapper) return;

      for (let i = 0; i < 4; i++) {
        const borderSegment = document.createElement("div");
        borderSegment.classList.add("video-border-segment");
        Object.assign(borderSegment.style, {
          position: "absolute",
          backgroundColor: "#DC143C", // A vibrant border color
          zIndex: 2, // Above video, below title
          opacity: 0, // Start hidden
          pointerEvents: "none",
        });
        videoWrapper.appendChild(borderSegment);
      }

      const segments = videoWrapper.querySelectorAll(".video-border-segment");
      // Assign specific roles/initial styles for each segment
      gsap.set(segments[0], { top: 0, left: 0, width: "0%", height: "2.5px" }); // Top
      gsap.set(segments[1], { top: 0, right: 0, width: "2.5px", height: "0%" }); // Right
      gsap.set(segments[2], {
        bottom: 0,
        right: 0,
        width: "0%",
        height: "2.5px",
      }); // Bottom
      gsap.set(segments[3], {
        bottom: 0,
        left: 0,
        width: "2.5px",
        height: "0%",
      }); // Left
    };

    createVideoBorderElements();
    const videoBorderSegments = document.querySelectorAll(
      ".video-border-segment"
    );
    // --- END NEW: Dynamic border elements ---

    // Initial GSAP setup for elements that should animate in on page load
    gsap.set(navLinks, { y: 30, opacity: 0, skewX: 5 });
    gsap.set(socialParagraphs, { y: 30, opacity: 0 });
    gsap.set(videoWrapper, {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)", // Starts as a tiny point in the center
      scale: 1.1, // Start slightly scaled up for a zoom-out effect // Start blurred
    });
    gsap.set(headerTitleSpans, {
      y: 100, // Make them come from below more significantly
      rotateX: 90, // Rotate on X-axis for a flip-up effect
      scale: 0.8,
      opacity: 0,
      transformOrigin: "center bottom", // Ensure rotation is from the bottom
    });

    // Main page load animations (only run once)
    gsap
      .timeline({ delay: 0.2 })
      .to(videoWrapper, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Expand from center to full screen
        scale: 1, // Zoom out to normal size
        filter: "blur(0px)", // Unblur
        ease: "power3.out",
        duration: 2.2,
      })

      // Animate in the video border segments
      .to(
        videoBorderSegments[0],
        { width: "100%", opacity: 1, duration: 0.8, ease: "power2.out" },
        "<0.8" // Start slightly after video reveal starts
      )
      .to(
        videoBorderSegments[1],
        { height: "100%", opacity: 1, duration: 0.8, ease: "power2.out" },
        "<0.1"
      )
      .to(
        videoBorderSegments[2],
        { width: "100%", opacity: 1, duration: 0.8, ease: "power2.out" },
        "<0.1"
      )
      .to(
        videoBorderSegments[3],
        { height: "100%", opacity: 1, duration: 0.8, ease: "power2.out" },
        "<0.1"
      )
      .to(
        ".headerg .headgehog",
        {
          y: 0,
          rotateX: 0, // Flip up to normal
          scale: 1,
          opacity: 1,
          stagger: 0.08, // Slightly more stagger for a wave effect
          ease: "back.out(1.4)", // More pronounced back ease
          duration: 1.5,
        },
        "<0.4" // Start title animation further into video/border reveal
      )
      .to(
        ".nike-logo-link", // New: Animate Nike logo in
        {
          backgroundColor: "#000000",
          opacity: 1,
          rotate: 0,
          scale: 1,
          ease: "elastic.out(1, 0.5)", // Bouncy elastic ease
          duration: 1.5,
        },
        "<0.3" // Start slightly after title comes in
      )
      .to(".hb", {
        fill: "transparent",
      })
      .to(
        nikeLogoPath, // New: Animate the fill color of the path
        {
          fill: "#910606ff", // Change to white after initial animation
          duration: 0.8,
          ease: "power1.inOut",
        },
        "<0.5" // Change color after it'i settled
      );

    // Menu toggle event listener
    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;

        if (menuToggle.classList.contains("closed")) {
          // Open animation - Menu slides up from bottom
          menuToggle.classList.remove("closed");
          menuToggle.classList.add("opened");

          const openTl = gsap.timeline({
            onStart: () => {
              menu.style.pointerEvents = "all";
              // Set initial state for menu items *before* opening animation if they need to re-enter
              gsap.set(navLinks, { y: 50, opacity: 0, skewX: 5 });
              gsap.set(socialParagraphs, { y: 30, opacity: 0 });

              // Animate out video, border, and header when menu opens
              gsap.to(videoWrapper, {
                scale: 0.9,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
              });
              gsap.to(
                videoBorderSegments,
                {
                  opacity: 0,
                  scale: 0.8,
                  duration: 0.5,
                  ease: "power2.in",
                },
                "<"
              ); // Hide border quickly as menu opens
              gsap.to(".hb", {
                backgroundColor: "#000000",
                duration: 0.5,
              });
              gsap.to(".headerg .headgehog", {
                y: -50,
                opacity: 1,
                rotateX: -30, // Flip slightly up as it disappears
                stagger: 0.03,
                ease: "power2.in",
                duration: 0.8,
              });
              gsap.to(".peace", {
                opacity: 0,
                duration: 0.5,
              });
            },

            onComplete: () => {
              isAnimating = false;
            },
          });

          openTl
            .to(menu, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Fully open
              ease: "power3.out",
              duration: 1.2,
            })
            .to(
              navLinks,
              {
                y: 0,
                opacity: 1,
                skewX: 0,
                stagger: 0.08,
                ease: "back.out(1.7)",
                duration: 0.9,
              },
              "<0.3"
            )
            .to(
              socialParagraphs,
              {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                ease: "power3.out",
                duration: 0.7,
              },
              "<0.1"
            )
            .to(".nike-logo", {
              strokeDashoffset: 0,
              duration: 1,
            });
        } else {
          // Close animation - Menu slides down to bottom
          menuToggle.classList.remove("opened");
          menuToggle.classList.add("closed");

          const closeTl = gsap.timeline({
            onComplete: () => {
              menu.style.pointerEvents = "none";
              isAnimating = false;

              // Animate video, border, and header back in when menu closes
              gsap.to(videoWrapper, {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power2.out",
              });
              gsap.to(".peace", {
                opacity: 1,
                duration: 0.5,
              });
              gsap.to(
                videoBorderSegments,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  ease: "power2.out",
                  stagger: 0.1, // Stagger their reappearance
                },
                "<0.2"
              ); // Reappear slightly before video is fully unblurred
              gsap.to(".hb", {
                backgroundColor: "none",
                duration: 0.5,
              });
              gsap.to(".headerg .headgehog", {
                y: -5,
                opacity: 1,
                rotateX: 0, // Flip back to normal
                stagger: 0.05,
                ease: "back.out(1.2)",
                duration: 1,
                delay: 0.3, // Delay slightly after menu starts closing
              });
            },
          });

          closeTl
            .to(
              socialParagraphs,
              {
                y: 20,
                opacity: 0,
                stagger: -0.03,
                ease: "power2.in",
                duration: 0.4,
              },
              0
            )
            .to(
              navLinks,
              {
                y: 20,
                opacity: 0,
                skewX: -5,
                stagger: -0.05,
                ease: "power2.in",
                duration: 0.5,
              },
              "<0.1"
            )
            .to(
              menu,
              {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Clip shut from bottom
                ease: "power3.in",
                duration: 1.1,
              },
              "<0.2"
            );
        }
      });
    } else {
      console.warn("Menu toggle or menu element not found.");
    }
  });
}
diablo3();
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP plugins (add this if not done elsewhere)
  gsap.registerPlugin(ScrollTrigger);

  // Cards array with unique IDs (adjust if your HTML uses classes instead)
  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate: 45 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1500, rotate: -30 },
    { id: "#card-5", endTranslateX: -2000, rotate: 45 },
  ];

  // Check if trigger element exists
  const triggerEl = document.querySelector(".wrapper-404");
  if (!triggerEl) {
    console.error("Error: .wrapper-404 element not found!");
    return;
  }

  // Check cards exist
  cards.forEach((card) => {
    if (!document.querySelector(card.id)) {
      console.warn(`Warning: Card ${card.id} not found in DOM.`);
    }
  });

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: ".wrapper-404",
    scroller: "#main",
    start: "top top",
    end: "+=500vh", // Adjust based on your page height needs
    scrub: 1, // Ties animation to scroll speed
    pin: true, // Pins the wrapper during scroll
    onUpdate: (self) => {
      // Animate wrapper (parallax shift)
      gsap.to(".wrapper-404", {
        x: -350 * self.progress + "vw", // Fixed interpolation: progress (0-1) scales the movement
        duration: 0.5,
        ease: "power3.out",
      });

      // Animate each card based on progress (staggered for effect)
      cards.forEach((card, index) => {
        const progressOffset = self.progress + index * 0.1; // Stagger by index for cascading
        const currentProgress = Math.min(progressOffset, 1); // Clamp to 0-1
        const cardEl = document.querySelector(card.id);
        if (cardEl) {
          gsap.to(cardEl, {
            x: card.endTranslateX * currentProgress + "px", // Scale movement with progress
            rotation: card.rotate * currentProgress,
            duration: 0.3,
            ease: "power3.out",
          });
        }
      });
    },
  });

  console.log("ScrollTrigger initialized. Scroll down to test!");
});

gsap.to(".outro h1", {
  filter: "blur(0px)",
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: ".outro",
    scroller: "#main",
    start: "top 35%",
    end: "top -15%",
    scrub: 2,
  },
});
gsap.to(".final", {
  height: "100vh",
  marginTop: 0,
  opacity: 0.75,
  duration: 3,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#p1",
    scroller: "#main",
    start: "top 47%",
    end: "top 10%",

    ease: "power3.out",
    scrub: 2,
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const ease = "power4.inOut";

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const href = link.getAttribute("href");

      if (href && !href.startsWith("#") && href !== window.location.pathname) {
        aniamteTransition().then(() => {
          window.location.href = href;
        });
      }
    });
  });

  revealTransition().then(() => {
    gsap.set(".block", { visibility: "hidden" });
  });

  function revealTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", { scaleY: 1 });
      gsap.to(".block", {
        scaleY: 0,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start",
          grid: "auto",
          axis: "x",
        },
        ease: ease,
        onComplete: resolve,
      });
    });
  }

  function aniamteTransition() {
    return new Promise((resolve) => {
      gsap.set(".block", { visibility: "visible", scaleY: 0 });
      gsap.to(".block", {
        scaleY: 1,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "start",
          grid: [2, 5],
          axis: "x",
        },
        ease: ease,
        onComplete: resolve,
      });
    });
  }
});
