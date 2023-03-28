$(function () {
  // header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 80) {
      $(".header__nav").addClass("with-effect");
    } else {
      $(".header__nav").removeClass("with-effect");
    }
  });
  // SLIDER NEWS

  $('.news-fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    cssEase: 'linear'
  });

})