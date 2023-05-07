$(".accordion-menu > .accordion-menu__section").mouseenter(function(){
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });