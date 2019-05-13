$(function() {
  // mobile menu
  $('.drawer').drawer();

  $(".drawer-menu").on("click","a", function () {
    $('.drawer').drawer('close');
  });

  // styling checkbox
  $('input, select').styler();

  // form send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
        $.fancybox.close();
      }, 2000);
    });
    return false;
  });

  // Carousels

  // first slider in main page
  $(".premiere__big-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.premiere__small-slider',
    responsive: [{
      breakpoint: 1059,
      settings: {
        dots: true
      }
    }]
  });

  $('.premiere__small-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.premiere__big-slider',
    dots: false,
    arrows: false,
    draggable: false,
    touchMove: false
  });

  var slickElement = $('.premiere__big-slider-inner');
  var status = $('.number-slide');
  var sliderText = $('.premiere__slider-text');
  var sliderSmallText = $('.premiere__slider-small-text');

  slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i >= 10) {
      status.text('/' + i);
    } else {
      status.text('/0' + i);
    }
    if (currentSlide === 0) {
      sliderText.html('Скидка <span>850 000 р.</span>');
      sliderSmallText.text('Только в мае 5 квартир по спеццене!');
    } else if (currentSlide === 1) {
      sliderText.text('Старт продаж 2й очереди');
      sliderSmallText.text('Авторские форматы квартир');
    } else if (currentSlide === 2) {
      sliderText.text('Выгодная рассрочка 0%');
      sliderSmallText.html('от 15 000 р./месяц <br> для первой очереди');
    }
  });
  // end

  // main gallery slider
  $(".mainGallery__big-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.mainGallery__small-slider',
    dots: true,
    infinite: true,
    customPaging : function(slider, i) {
      var counter = i + 1;
      if (i >= 9) {
        return '<button class="slick-dot">'+counter+'</button>'
      } else {
        return '<button class="slick-dot">0'+counter+'</button>'
      }
    }
  });

  $('.mainGallery__small-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.mainGallery__big-slider',
    dots: false,
    arrows: false,
    draggable: false,
    touchMove: false,
    infinite: true
  });
  // end

  // page gallery slider
  var pageGalleryBigSlider = $('.pageGallery__big-slider');
  var pageGallerySmallSliderLeft = $('.pageGallery__small-left');
  var pageGallerySmallSliderRight = $('.pageGallery__small-right');

  pageGalleryBigSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 1059,
      settings: {
        dots: true
      }
    }]
  });

  pageGallerySmallSliderLeft.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    draggable: false,
    touchMove: false,
    infinite: true,
    fade: true,
    initialSlide: -1
  });

  pageGallerySmallSliderRight.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    draggable: false,
    touchMove: false,
    infinite: true,
    fade: true,
    initialSlide: 1
  });

  pageGalleryBigSlider.on('afterChange', function(event, slick, currentSlide) {
    pageGallerySmallSliderLeft.slick('slickGoTo', currentSlide - 1);
    pageGallerySmallSliderRight.slick('slickGoTo', currentSlide + 1);
  });
  // end

  // planing slider
  $('.planing__carousel').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
    items: 1,
    nav: false,
    dots: false,
    smartSpeed: 500,
    loop: true,
    navText: ['','']
  });
  // end

  // main gallery slider
  $(".advantages__tabs-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    customPaging : function(slider, i) {
      var counter = i + 1;
      if (i >= 9) {
        return '<button class="slick-dot">'+counter+'</button>'
      } else {
        return '<button class="slick-dot">0'+counter+'</button>'
      }
    }
  });
  // end

  // maskedinput
  $('[name=phone]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: true
  });
  
  // img not drag
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // parallax
  $('.parallax1, .parallax2, .parallax3, .parallax4, .parallax5, .parallax6, .parallax7, .parallax8, .parallax9, .parallax10').paroller({
    factor: 0.2,
    type: 'foreground',
    direction: 'vertical',
    transition: 'transform 0.1s ease'
  });

  $(".menuScroll").on("click", function (event) {
    event.preventDefault(); //опустошим стандартную обработку
    var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
    top = $(id).offset().top; //определим высоту от начала страницы до якоря
    $('body,html').animate({ scrollTop: top }, 500); //сделаем прокрутку за 1 с
  });

});

// button to top
$(window).scroll(function(){
  if($(window).scrollTop() > 800){
    $('#toTop').fadeIn(600)
  } else {
    $('#toTop').fadeOut(400)
  }
});

$("#inTop").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 500,
    easing: "swing"
  });
  return false;
});

var footerMenu = $('#footer-menu')

footerMenu.waypoint(function(direction) {
  if (direction === "down") {
    $('#toTop').addClass('active')
  } else {
    $('#toTop').removeClass('active')
  }
}, {
  offset: 'bottom-in-view'
});

// end

// menu fixed
$(document).ready(function() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  var IE = msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);

  if (document.documentElement.clientWidth > 767) {
    if (!IE) {
      var header = $(".header"); // Меню
      var scrollPrev = 0 // Предыдущее значение скролла

      $(window).scroll(function() {
        var scrolled = $(window).scrollTop(); // Высота скролла в px
        var firstScrollUp = false; // Параметр начала сколла вверх
        var firstScrollDown = false; // Параметр начала сколла вниз

        // Если скроллим
        if ( scrolled > 0 ) {
          // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
          if ( scrolled > scrollPrev ) {
            firstScrollUp = false; // Обнуляем параметр начала скролла вверх
            // Если меню видно
            if ( scrolled < header.height() + header.offset().top ) {
              // Если только начали скроллить вниз
              if ( firstScrollDown === false ) {
                var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                header.css({
                  "top": topPosition + "px",
                  "transition": "none"
                });
                firstScrollDown = true;
              }
              // Позиционируем меню абсолютно
              header.css({
                "position": "absolute"
              });
              // Если меню НЕ видно
            } else {
              // Позиционируем меню фиксированно вне экрана
              header.css({
                "position": "fixed",
                "top": "-1" + header.height() + "px",
                "transition": "none"
              });
            }

            // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
          } else {
            firstScrollDown = false; // Обнуляем параметр начала скролла вниз
            // Если меню не видно
            if ( scrolled > header.offset().top ) {
              // Если только начали скроллить вверх
              if ( firstScrollUp === false ) {
                var topPosition = header.offset().top; // Фиксируем текущую позицию меню
                header.css({
                  "top": 0 + "px",
                  "transition": "none"
                });
                firstScrollUp = true;
              }
              // Позиционируем меню абсолютно
              header.css({
                "position": "fixed",
                "transition": "all .2s ease"
              });
            } else {
              // Убираем все стили
              header.removeAttr("style");
            }
          }
          // Присваеваем текущее значение скролла предыдущему
          scrollPrev = scrolled;
        }
      });
    }
  }
});
// end

// tabs
$.ionTabs(".planing__turns-tabs, .planing__scheme-tabs", {
  type: "none"
});

$.ionTabs(".advantages__tabs", {
  type: "none"
});
// end

// fix object fit cover
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
  jQuery('.objectFit').each(function(){
    var t = jQuery(this),
      s = 'url(' + t.attr('src') + ')',
      p = t.parent(),
      d = jQuery('<div></div>');

    p.append(d);
    d.css({
      'height'                : t.parent().css('height'),
      'background-size'       : 'cover',
      'background-repeat'     : 'no-repeat',
      'background-position'   : '50% 20%',
      'background-image'      : s
    });
    t.hide();
  });
}