// NAV BAR SCROLLING EFFECT
window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".nav-bar");
  const logo = document.querySelector(".logo-text");
  const scrollThreshold = 50;
  if (window.scrollY > scrollThreshold) {
    navBar.classList.add("nav-bar-scrolled");
    logo.classList.add("logo-scrolled");
  } else {
    navBar.classList.remove("nav-bar-scrolled");
    logo.classList.remove("logo-scrolled");
  }
});

// COUNTER ANIMATIONS
const counts = document.querySelectorAll(".count");
// const speed = 90;
counts.forEach((counter) => {
  function upData() {
    const speed = Number(counter.getAttribute("data-speed"));
    const target = Number(counter.getAttribute("data-target"));
    const count = counts.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = inc + count;
      setTimeout(upData, 20);
    } else {
      counter.innerText = target;
    };
  };
  upData();
});

//SKILLS ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelectorAll(".progress");
  progressBar.forEach((bar) => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent + "%" ;
    bar.innerText = percent + "%";
  });
});

// MOVE TO TOP BUTTON
const moveTopBtn = document.querySelector(".move-to-top-btn");
const scrolled = 1000;
window.addEventListener("scroll", () => {
  if(scrollY > scrolled) {
    moveTopBtn.classList.remove("move-to-top-btn-hidden");
  } else {
    moveTopBtn.classList.add("move-to-top-btn-hidden");
  };
});