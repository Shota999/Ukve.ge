$(document).ready(function () {

    $('.sauce').click(function () {
        $(this).find('.more').toggleClass('active');
    });
    $('.nav_button').click(function () {
        $(".menu").addClass('show');
    });
    $('.close').click(function () {
        $(this).parent('.menu').removeClass('show');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('header').addClass('fixedheader');
        } else {
            $('header').removeClass('fixedheader');
        }
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
});