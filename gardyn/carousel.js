
let lastScrollTop = 1;
const header = document.getElementById("main-header");
const nav = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling Down
        header.classList.add("scrolled-header");
        nav.classList.add("scrolled-navbar");
    } else {
        // Scrolling Up
        header.classList.remove("scrolled-header");
        nav.classList.remove("scrolled-navbar");
    }

    lastScrollTop = scrollTop;
});


AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  // Get the navbar element
const navbar = document.getElementById('navbar');

// Function to add/remove background on scroll
window.onscroll = function() {
    if (window.scrollY > 500) { // Change 50 to the scroll threshold you prefer
        navbar.style.backgroundColor = '#06490f'; // Change to your desired background color
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
};
const images = [
    './images/b2.jpg',
    './images/b3.jpg',
    './images/b4.jpg'  
];

let currentIndex = 0;
const hero = document.querySelector('.db');

function changeBackground() {
    // Update the background image
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;

    // Increment the index for the next image
    currentIndex = (currentIndex + 1) % images.length;
}









$(document).ready(function(){
    $("#gallery-carousel").owlCarousel({
        loop: true,                 // Enable infinite loop
        margin: 0,                 // Space between items
        nav: true,                  // Enable next/prev navigation
        dots: true,                 // Show pagination dots
        autoplay: true,             // Enable auto play
        autoplayTimeout: 3000,       // Auto play delay (3s)
        autoplayHoverPause: true,   // Pause on hover
        responsive: {
            0: {
                items: 1 // On small screens
            },
            600: {
                items: 2 // Medium screens
            },
            1000: {
                items: 3 // Large screens
            }
        }
    });
});

function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + startPosition;
    const startTime = performance.now();

    function easeInOut(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const ease = easeInOut(progress);

        window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", function () {
jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.5, // Adjust speed for the parallax effect
    imgPosition: "50% 50%",
    disableParallax: /iPad|iPhone|iPod|Android/,
    disableVideo: /iPad|iPhone|iPod|Android/
});
});        
