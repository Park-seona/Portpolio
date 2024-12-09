$(".accordion-menu > .accordion-menu__section").mouseenter(function(){
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });

  var mySwiper = new Swiper('.swiper-container'), {
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // 화면의 넓이가 640px 이상일 때
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  }