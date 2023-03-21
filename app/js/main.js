$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 80) {
      $(".header__nav").addClass("with-effect");
    } else {
      $(".header__nav").removeClass("with-effect");
    }
  });

})