// Menu Toggle Code
function toggleMenu() {
  const menuItems = document.querySelector(".list-items");
  menuItems.classList.toggle("show");
}

// Hero Slider
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    simulateTouch: false, // Disable slide change using mouse drag or touch
    allowTouchMove: false, // Disable touch-based slide changes
    breakpoints: {
      320: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
    on: {
      transitionEnd: function () {
        // Optional: Additional fixes or adjustments on slide transition end
      },
    },
  });
});

// Treatment Section Slider

var swiper = new Swiper(".swiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  sliderPerGroup: 2.5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".treatment-slider-next-arrow",
    prevEl: ".treatment-slider-back-arrow",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
    1024: { slidesPerView: 2 },
    1025: { slidesPerView: 2.5 },
  },
});

// Tabs

function openTab(tabId) {
  // Get all tab buttons and contents
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  // Hide all contents and remove active class from all buttons
  buttons.forEach((button) => button.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  // Show the clicked tab content and set its button as active
  document.getElementById(tabId).classList.add("active");
  document
    .querySelector(`.tab-button[onclick="openTab('${tabId}')"]`)
    .classList.add("active");
}

// Initialize with the first tab active
document.addEventListener("DOMContentLoaded", () => {
  openTab("tab1");
});

function toggleMenu() {
  const menu = document.querySelector(".list-items");
  menu.classList.toggle("show");
}

// 3
var swiper = new Swiper(".swiper-product-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".product-slider-next-arrow",
    prevEl: ".product-slider-back-arrow",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Reviews Slider
var swiper = new Swiper(".swiper-reviews", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".custom-pagination", // Your custom pagination container
    clickable: true,
    renderBullet: function (index, className) {
      // Customize how bullets are rendered
      return '<span class="' + className + '"></span>';
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 7.2}deg)">${char}</span>`
  )
  .join("");
