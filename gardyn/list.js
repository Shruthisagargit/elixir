

let lastScrollTop = 0;
const header = document.getElementById("main-header");
const nav = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down
        header.classList.add("scrolled-header"); // Hide header
        nav.classList.add("scrolled-navbar"); // Move navbar up
    } else {
        // Scrolling Up
        header.classList.remove("scrolled-header"); // Show header
        nav.classList.remove("scrolled-navbar"); // Move navbar back down
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

// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 3000);

const buttons = document.querySelectorAll('.btn-line');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                console.log(`Button with index ${index} was clicked!`);
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const links = document.querySelectorAll("a[href^='#']");
        
            links.forEach(link => {
                link.addEventListener("click", function (e) {
                    e.preventDefault();
        
                    const targetId = this.getAttribute("href").substring(1);
                    const targetElement = document.getElementById(targetId);
        
                    if (targetElement) {
                        smoothScroll(targetElement, 1000); // Adjust duration in milliseconds
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
        });
        document.addEventListener("DOMContentLoaded", function () {
            jarallax(document.querySelectorAll(".jarallax"), {
                speed: 0.5, // Adjust speed for the parallax effect
                imgPosition: "50% 50%",
                disableParallax: /iPad|iPhone|iPod|Android/,
                disableVideo: /iPad|iPhone|iPod|Android/
            });
        });        
        $(document).ready(function(){
            /* Initialize Owl Carousel */
            $(".owl-carousel").owlCarousel({
                items: 1,              
                loop: true,            
             
                smartSpeed: 800,       
                dots: true,            
                nav: false             
            });
        
            /* Initialize Jarallax */
            jarallax(document.querySelectorAll(".jarallax"), {
                speed: 0.3
            });
        
            /* Fix Content Visibility */
            $(".testimonial-section .container").css("visibility", "visible");
        });