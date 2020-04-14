import './slick.min'

// hamburger menu close/open
const hamburgerButtonOpen = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerButtonClose = document.querySelector('.hamburger-menu__close');
const mobileNavItem = document.querySelectorAll('.hamburger-menu__link');

hamburgerButtonOpen.addEventListener('click', () => {
  hamburgerMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

hamburgerButtonClose.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none';
  document.body.style.overflow = 'visible';
});

mobileNavItem.forEach(el => {
  el.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    hamburgerMenu.style.display = 'none';
  })
});

//slider-reviews
$(document).ready(function () {
  $('.slick-reviews').slick({
    infinite: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
});
