const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-close-btn');
const contactUsModal = document.querySelector('.contact-modal');
const openContactUsBtns = document.querySelectorAll('.open-contact-us-btn');
const closeContactUsBtns = document.querySelectorAll('.close-contact-us-btn');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenuLinks.forEach((link) => link.classList.remove('text-white'));
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    toggleMobileMenu();

    navLinks.forEach((otherLink) => otherLink.classList.remove('text-white'));
    link.classList.add('text-white');

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Function to toggle the CONTACT US WINDOW
function toggleContactUs() {
  contactUsModal.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

openContactUsBtns.forEach((btn) =>
  btn.addEventListener('click', toggleContactUs)
);

closeContactUsBtns.forEach((btn) => {
  btn.addEventListener('click', toggleContactUs);
});

window.addEventListener('click', (event) => {
  if (event.target === contactUsModal) {
    toggleContactUs();
  }
});

// Tabs Funcs
const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((btn) => {
      const icon = btn.querySelector('svg');
      icon.classList.remove('active-tab-icon');
    });

    const clickedIcon = button.querySelector('svg');
    clickedIcon.classList.add('active-tab-icon');

    tabButtons.forEach((btn) => btn.classList.remove('active-tab'));
    button.classList.add('active-tab');

    const tabId = button.getAttribute('data-tab');
    showTabContent(tabId);
  });
});

function showTabContent(tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((content) => content.classList.add('hidden'));

  const selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.remove('hidden');
}

// Add bg color func to the header when scrolling
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('bg-brand-green-200/10', window.scrollY > 100);
});

// Swiper funcs
document.addEventListener('DOMContentLoaded', function () {
  const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      0: { slidesPerView: 1.4, spaceBetween: 16 },
      640: { slidesPerView: 2.5, spaceBetween: 24 },
      1024: { slidesPerView: 3.5, spaceBetween: 32 },
      1440: { slidesPerView: 4.15, spaceBetween: 48 },
    },
  });

  document
    .getElementById('btn-prev')
    .addEventListener('click', () => mySwiper.slidePrev());
  document
    .getElementById('btn-next')
    .addEventListener('click', () => mySwiper.slideNext());
});
