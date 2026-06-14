const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileOverlay = document.querySelector('.mobile-overlay');
const toTopBtn = document.querySelector('.to-top-btn');

// CHANGE NAVBAR ON SCROLL
window.addEventListener('scroll', () => {
  const y = window.scrollY;

  if (y > 70) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});

// OPEN MOBILE MENU
const openMobileMenu = () => {
  mobileMenu.classList.add('opened');

  openIcon.classList.add('hide');

  closeIcon.classList.add('show');

  mobileOverlay.classList.add('show');
};

// CLOSE MOBILE MENU
const closeMobileMenu = () => {
  mobileMenu.classList.remove('opened');

  openIcon.classList.remove('hide');

  closeIcon.classList.remove('show');

  mobileOverlay.classList.remove('show');
};

openIcon.addEventListener('click', openMobileMenu);

closeIcon.addEventListener('click', closeMobileMenu);

window.addEventListener('scroll', closeMobileMenu);

window.addEventListener('resize', () => {
  if (window.innerWidth > 610) closeMobileMenu();
});

const outsideClick = (e) => {
  if (mobileOverlay.classList.contains('show') && e.target === mobileOverlay) {
    closeMobileMenu();
  }
};

window.addEventListener('click', outsideClick);

// SHOW / HIDE TO TOP BTN
if (toTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}
