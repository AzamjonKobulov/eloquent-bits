// Tabs Functions

// Function to switch tabs
function switchTab(tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((content) => content.classList.add('hidden'));

  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach((tab) => tab.classList.remove('active-tab'));

  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.remove('hidden');

  const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
  selectedTab.classList.add('active-tab');
}

const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchTab(button.dataset.tab));
});

switchTab('tab1');

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
        slidesPerView: 4,
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
