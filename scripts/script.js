// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 4.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  // Navbar animation
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });

  // Hero content animations
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.from(".hero-content h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })
    .from(
      ".hero-title",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".hero-description",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".cta-container",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".social-links",
      {
        y: 50,
        opacity: 0,
        duration: 1,
      },
      "-=0.5"
    )
    .from(
      ".hero-image",
      {
        x: 100,
        opacity: 0,
        duration: 1.5,
      },
      "-=1"
    );

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

//counter section
gsap.registerPlugin(ScrollTrigger);

// Animate section header
gsap.to("#counter-header", {
  scrollTrigger: {
    trigger: "#counter-header",
    start: "top 80%",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
});

// Animate counter cards
gsap.utils.toArray(".counter-card").forEach((card, index) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: index * 0.2,
    ease: "power4.out",
  });
});

// Counter animation function
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2;
  const steps = 100;
  const stepValue = target / steps;
  let current = 0;

  const counter = setInterval(() => {
    current += stepValue;
    if (current > target) {
      element.textContent = target.toLocaleString();
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, (duration * 1000) / steps);
}

// Start counter animations when in view
const counterElements = document.querySelectorAll(".counter-value");
counterElements.forEach((counter) => {
  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: () => animateCounter(counter),
    once: true,
  });
});

//services
gsap.registerPlugin(ScrollTrigger);

// Magnetic effect
document.querySelectorAll(".magnetic-wrap").forEach((wrap) => {
  const card = wrap.querySelector(".service-card");

  wrap.addEventListener("mousemove", (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = wrap.offsetWidth / 2;
    const centerY = wrap.offsetHeight / 2;

    const deltaX = (x - centerX) / 25;
    const deltaY = (y - centerY) / 25;

    card.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) translateZ(20px)`;
  });

  wrap.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  });
});

// Progress line animation
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const line = card.querySelector(".progress-line");
    line.style.width = "100%";
    line.style.transition = "width 0.6s ease-in-out";
  });

  card.addEventListener("mouseleave", () => {
    const line = card.querySelector(".progress-line");
    line.style.width = "0%";
  });
});

// GSAP Animations
// Header animation
gsap.to("#services-header", {
  scrollTrigger: {
    trigger: "#services-header",
    start: "top 80%",
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
});

// Service cards animation
document.querySelectorAll(".service-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    rotateX: 15,
    duration: 1,
    delay: index * 0.2,
    ease: "power4.out",
  });
});

// Floating animation for icons
gsap.to(".service-icon", {
  y: 10,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  stagger: {
    each: 0.2,
    from: "random",
  },
});

//services scripts
gsap.to(".section-header2", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-header",
    start: "top 80%",
  },
});

// Initialize Swiper
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
  speed: 800,
});

// Animate slides
gsap.utils.toArray(".swiper-slide").forEach((slide, index) => {
  gsap.to(slide, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: slide,
      start: "top 85%",
    },
    delay: index * 0.2,
  });
});

//skills sections
gsap.to(".section-title3", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 80%",
  },
});

// Animate skill cards
gsap.utils.toArray(".skill-card").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    delay: index * 0.2,
  });
});

// Animate progress bars
gsap.utils.toArray(".progress").forEach((progress) => {
  const progressValue = progress.getAttribute("data-progress");

  gsap.to(progress, {
    width: progressValue + "%",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: progress,
      start: "top 90%",
    },
  });
});

//clients info
// Animate section header
gsap.to(".section-header5", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-header",
    start: "top 80%",
  },
});

// Animate review cards
gsap.utils.toArray(".review-card").forEach((card, index) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    delay: index * 0.2,
  });
});

// Mouse move effect
document.querySelectorAll(".review-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });
});

//footer section
// Initialize GSAP animations
function initAnimations() {
  // Animate footer sections
  gsap.from(".footer-section", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
  });

}

// Scroll to top functionality
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initAnimations);
