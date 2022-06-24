const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    720: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1200: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})