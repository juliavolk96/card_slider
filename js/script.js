const swiper = new Swiper(".slider-container", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  centeredSlides: true,

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },

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
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 20,
    },
    1120: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },

  watchOverflow: true,
});
