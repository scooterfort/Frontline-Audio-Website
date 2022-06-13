// //SMOOTH SCROLL
// const body = document.body,
// scrollWrap = document.getElementsByClassName("siteWrapper")[0],
// height = scrollWrap.getBoundingClientRect().height - 1,
// speed = 0.05;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
// offset += (window.pageYOffset - offset) * speed;

// var scroll = "translateY(-" + offset + "px) translateZ(0)";
// scrollWrap.style.transform = scroll;

// callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();
// // SMOOTH SCROLL END




//smooth scroll 2

//smooth scroll end


//PARALLAX
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";
})
//PARALLAX END


// NAV BAR
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

  
    burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');

    // animate links 
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
        });
    
    // burger animation
    burger.classList.toggle('toggle');  

    });
}

navSlide();

//NAV BAR END





