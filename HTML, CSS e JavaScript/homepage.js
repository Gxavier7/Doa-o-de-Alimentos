const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    720: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
