new Swiper(".new__swiper", {
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
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
    978: {
      slidesPerView: 4,
      slidesPerGroup: 4
      }
  },
  spaceBetween: 30,
  loop: true,
  simulateTouch: false,
});
