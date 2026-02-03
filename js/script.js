const swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    950: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },

  watchOverflow: true,
});
