/* const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }); */

  const swiper = new Swiper('.swiper', {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', (e) =>{
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    } else {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false);
    }
});


let header = document.querySelector('.primary-header');
let wrap = document.querySelector('.primary-header .wrap');
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  if (scroll > 10) {
    header.style.background = "#121212"
    wrap.style.height = "80px"

  } else {
    header.style.background = "transparent"    
  }
})