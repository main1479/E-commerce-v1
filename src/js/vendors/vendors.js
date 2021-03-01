import pageTransition from './pageTransition.js';
import Swiper from 'swiper/bundle';

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
