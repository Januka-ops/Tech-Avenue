const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    dropdown.classList.add("active");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdown.classList.remove("active");
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

// Product card hover effect
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  const btn = card.querySelector(".btn-card");

  card.addEventListener("mouseenter", () => {
    // Blur the card image
    const img = card.querySelector("img");
    if (img) img.style.filter = "blur(5px)";

    // Show button on top
    if (btn) {
      btn.style.display = "block";
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
      btn.style.position = "absolute";
      btn.style.zIndex = "10";
      btn.style.top = "50%";
      btn.style.left = "50%";
      btn.style.transform = "translate(-50%, -50%)";
    }
  });

  card.addEventListener("mouseleave", () => {
    // Remove blur
    const img = card.querySelector("img");
    if (img) img.style.filter = "blur(0px)";

    // Hide button
    if (btn) {
      btn.style.display = "none";
      btn.style.opacity = "0";
      btn.style.visibility = "hidden";
    }
  });
});



// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slider-slide");
const dots = document.querySelectorAll(".dot");
const sliderWrapper = document.querySelector(".slider-wrapper");

function showSlide(n) {
  if (n >= slides.length) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = slides.length - 1;
  }

  // Update slider position
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentSlide) {
      dot.classList.add("active");
    }
  });
}

// Previous button
document.querySelector(".slider-prev").addEventListener("click", () => {
  currentSlide--;
  showSlide(currentSlide);
});

// Next button
document.querySelector(".slider-next").addEventListener("click", () => {
  currentSlide++;
  showSlide(currentSlide);
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 5000);

// Hamburger toggle
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Hamburger toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  if (!nav || !hamburger) return;
  nav.classList.toggle("active");
}

// Mobile dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = this.parentElement;
      const menu = this.nextElementSibling;
      const isOpen = dropdown.classList.contains("active");
      // Close all dropdowns
      document.querySelectorAll(".dropdown").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".dropdown-menu")?.classList.remove("show");
      });
      // If not open, open this one
      if (!isOpen) {
        dropdown.classList.add("active");
        menu.classList.add("show");
      }
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(reveal => {
  observer.observe(reveal);
});




