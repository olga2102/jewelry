new Swiper(".catalog__swiper", {
  navigation: {
    nextEl: '.swiper-catalog--next',
    prevEl: '.swiper-catalog--prev',
  },
  pagination: {
    el: '.swiper-pag',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
  breakpoints: {
    320: {
    slidesPerView: 2,
    slidesPerGroup: 2
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
      }
  },
  spaceBetween: 30,
  loop: true,
  simulateTouch: false,
});
