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

  // SLIDER gallery
  $(function () {
    initSlider();
  });


  function initSlider() {

    var slider = $(".gallery-slider");

    slider.on("init", function (slick) {
      checkSlides(this, 0);
    });

    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(this).addClass("changing");
    });

    slider.on("afterChange", function (event, slick, currentSlide) {
      $(this).removeClass("changing");
      checkSlides(this, currentSlide);
    });


    slider.slick({
      prevArrow: "<button type='button' class='slick-prev' aria-label='Previous picture'></button>",
      nextArrow: "<button type='button' class='slick-next' aria-label='Next Picture'></button>",
      centerMode: true,
      variableWidth: true,
      dots: true,
      // autoplay: true,
      slidesToShow: 1,
    });

  }

  function checkSlides(slider, currentSlide) {
    var slides = $(".gallery-slide", $(slider));
    slides.removeClass("prev");
    slides.filter(function (index) {
      return $(this).attr("data-slick-index") < currentSlide;
    }).addClass("prev");;
  }


})