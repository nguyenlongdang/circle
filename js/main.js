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
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    observer: true,
    observeParents: true,
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  // detail slider
  var detailGalleryThumbs = new Swiper(".detail-gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var detailGalleryTop = new Swiper(".detail-gallery-top", {
    spaceBetween: 10,
    thumbs: {
      swiper: detailGalleryThumbs,
    },
  });

  // venobox detail
  $(".venobox").venobox({
    numeratio: true,
    border: "20px",
  });

  $(".accordion__title").click(function () {
    const $accordion_wrapper = $(this).parent();
    const $accordion_content = $(this)
      .parent()
      .find(".accordion__content")
      .first();
    const $accordion_open = "accordion--open";

    // If this accordion is already open
    if ($accordion_wrapper.hasClass($accordion_open)) {
      $accordion_content.slideUp(); // Close the content.
      $accordion_wrapper.removeClass($accordion_open); // Remove the accordionm--open class.
    }
    // If this accordion is not already open
    else {
      $accordion_content.slideDown(); // Show this accordion's content.
      $accordion_wrapper.addClass($accordion_open); // Add the accordion--open class.
    }
  });
});
