$(function () {
  // sidebar open
  $(".header__mid-cart-open").on("click", function () {
    $(".section__sidebar").addClass("active");
    $(".overplay").addClass("active");
  });

  // sidebar close
  $(".section__sidebar-header-times, .overplay").on("click", function () {
    $(".section__sidebar").removeClass("active");
    $(".overplay").removeClass("active");
  });

  // menu open
  $(".header__menu-mobile-open").on("click", function () {
    $(".section__menu").addClass("active");
    $(".overplay").addClass("active");
  });

  // menu close
  $(".section__menu-header-times, .overplay").on("click", function () {
    $(".section__menu").removeClass("active");
    $(".overplay").removeClass("active");
  });

  // swiper slider
  var swiper = new Swiper(".swiper-slider", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // swiper product slider
  var swiper = new Swiper(".swiper-product", {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // modal slider
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });
});

