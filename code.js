// Sticky navigasjonsmeny funksjon
window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Smooth scrolling funksjon
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Forhindre standard hopp til seksjon
    const targetId = this.getAttribute('href'); // Hent ID fra href

    // Scroll jevnt til målet
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
