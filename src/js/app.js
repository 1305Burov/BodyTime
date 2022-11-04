import * as flsFunc from './moduls/func.js';

// import Swiper, { Navigation, Pagination } from 'swiper';
import { filter } from './moduls/filter.js';
import { accordion } from './moduls/accordion.js';
import { modals } from './moduls/modals.js';

flsFunc.isWebp();
filter();
accordion();
modals();

const swiper = document.querySelector('.swiper') && new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preloadImages: false,
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
});

window.onload = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.dataset.src ) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                } 
                entry.target.classList.add('visible');
            }
        })
    }, { threshold: 0.5 })

    
    document.querySelectorAll('.invisible').forEach(el => observer.observe(el));
}