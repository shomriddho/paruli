let slideIndex = 1; // Start with the first slide

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const indicators = document.getElementsByClassName("indicator");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all indicators
  for (i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }

  // Wrap around to the last slide if going back from the first slide
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Wrap around to the first slide if going forward from the last slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Add the "active" class to the current indicator
  indicators[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Initialize the slideshow
showSlides();

document.addEventListener("DOMContentLoaded", function() {
    // Get the button and menu elements
    var toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    var navbarMenu = document.getElementById('navbar-sticky');

    // Add a click event listener to the button
    toggleButton.addEventListener('click', function() {
      // Toggle the 'hidden' class on the menu to show/hide it
      navbarMenu.classList.toggle('hidden');
    });
  });