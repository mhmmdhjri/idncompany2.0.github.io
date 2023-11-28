// Navbar Toggle Button
const toggleButton = document.getElementsByClassName("toogle")[0];
const navbarItem = document.getElementsByClassName("navbar-item");
toggleButton.addEventListener("click", function () {
  // transition navbar item
  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.toggle("active");
  }
});


// const hamburger = document.querySelector(".toogle");
// const navBar = document.querySelector(".navbar-item");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active")
//   navBar.classList.toggle("active")
// }); 
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("show-navbar");
  });
});



const vid = document.getElementById("street");

window.addEventListener("scroll", function() {
  const scrollPosition = window.pageYOffset;
  vid.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
CustomEase.create("custom", "M0,0,C0,0.8,0.139,0.86,0.224,0.918,0.344,1,0.504,1,1,1");

for (let i = 1; i <= 8; i++) {
  const elementClass = `.big-header-${i}`;
  const animationDelay = 0.5 + (i - 1) * 0.06;
  
  gsap.from(elementClass, {
    y: -400,
    duration: 0.9,
    delay: animationDelay,
    ease: "custom"
  });
}

gsap.to(".opening", {y: -830, opacity: 0, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
gsap.to(".the-header", {y: 400, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")})
gsap.from(".background", {y: 800, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
});



// typed js
const typed = new Typed('.multiple-text',{
  strings:['Software Engineering','Network Engineering','Visual Communication Design','English','Diniyah'],
  typeSpeed:100,
  backSpeed:100,
  bacDelay:900,
  loop:true

});
// Toggle & REsponsive Navigation

const navSlide = () => {
const burger = document.querySelector(".burger");
const navList = document.querySelector("nav");

burger.addEventListener("click", () => {
    // toggle nav list and burger class
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
});
};

navSlide();

// Hapus from setelah Go Back


window.onbeforeunload = () => {
for (const from of document.getElementsByTagName("form")) {
    from.reset();
}
};