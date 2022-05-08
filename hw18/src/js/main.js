import _ from "lodash";
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper-slider', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.controls__pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.controls__button-next',
        prevEl: '.controls__button-prev',
    },
});