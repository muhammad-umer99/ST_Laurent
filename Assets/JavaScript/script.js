// Initialize Swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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


// 2

var swiper = new Swiper(".swiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  sliderPerGroup: 2.5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
    1024: { slidesPerView: 2.5 },
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
  const menu = document.querySelector('.list-items');
  menu.classList.toggle('show');
}
