// Swiper Functions
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
    },
  });

  // Custom navigation events
  document.getElementById('btn-prev').addEventListener('click', function () {
    mySwiper.slidePrev();
  });

  document.getElementById('btn-next').addEventListener('click', function () {
    mySwiper.slideNext();
  });
});
