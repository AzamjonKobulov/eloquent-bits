// Tabs Functions

const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => {
      const icon = btn.querySelector('svg');
      icon.classList.remove('active-tab-icon');
    });

    const clickedIcon = button.querySelector('svg');
    clickedIcon.classList.add('active-tab-icon');

    tabButtons.forEach((btn) => {
      btn.classList.remove('active-tab');
    });
    button.classList.add('active-tab');

    const tabId = button.getAttribute('data-tab');
    showTabContent(tabId);
  });
});

function showTabContent(tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((content) => {
    content.classList.add('hidden');
  });

  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.remove('hidden');
}

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('bg-brand-green-200/10');
  } else {
    header.classList.remove('bg-brand-green-200/10');
  }
});

// Swiper Functions
document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
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
        slidesPerView: 4.15,
        spaceBetween: 48,
      },
    },
  });

  document.getElementById('btn-prev').addEventListener('click', function () {
    mySwiper.slidePrev();
  });

  document.getElementById('btn-next').addEventListener('click', function () {
    mySwiper.slideNext();
  });
});
