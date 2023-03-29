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
      autoplay: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            centerMode: false,
            variableWidth: false,
            arrows: false
          }
        },
      ]


    });

    // slider.slick("unslick");


  }

  function checkSlides(slider, currentSlide) {
    var slides = $(".gallery-slide", $(slider));
    slides.removeClass("prev");
    slides.filter(function (index) {
      return $(this).attr("data-slick-index") < currentSlide;
    }).addClass("prev");;
  }

  // blogs slider
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow: '<button class="slick-prev"> < </button>',
    nextArrow: '<button class="slick-next"> > </button>',

    //         responsive: [                        
    //             {
    //               breakpoint: 576,
    //               settings: {
    //                 centerMode: false,
    //                 variableWidth: false,
    //               }
    //             },
    //         ]
  });


  var imgs = $('.slider img');
  imgs.each(function () {
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')',
      'background-position': 'center',
      '-webkit-background-size': 'cover',
      'background-size': 'cover',
    });
    $(this).hide();
  });

  // uPTop
  $('.back-to-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 800); // 800 - Скорость анимации
  });

  $(window).scroll(function () { // Отслеживаем начало прокрутки
    let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

    if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
      $('.back-to-top').addClass('active');
    } else {
      $('.back-to-top').removeClass('active');
    }
  });

  // Hamburger menu
  (function () {
    $('.hamburger-wrapper').on('click', function () {
      $('.hamburger-menu').toggleClass('animate');
      $('.mobile-menu-overlay').toggleClass('visible');
    })
    $('.mobile-menu-overlay > ul > li > a').on('click', function () {
      $('.hamburger-menu').removeClass('animate');
      $('.mobile-menu-overlay').removeClass('visible');
    })
  })();


})