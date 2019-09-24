$(document).ready(function () {

    $('.sauce').click(function () {
        $(this).toggleClass('active');
    });
    $('.sauce').click(function () {
        $(this).parent('.actions').find('.more').toggleClass('show');
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

    // Slider

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.slider_button_next',
            prevEl: '.slider_button_prev',
        }
    });

    var swiper = new Swiper('.inner-slider', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.inner_button_next',
            prevEl: '.inner_button_prev',
        },
    });

    // Menu Scroll

    function scrollNav() {
        $('.nav a , .drink_button a').click(function () {
            //Toggle Class
            $(".active").toggleClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $speed =  Math.abs($(window).scrollTop() - $($(this).attr('href')).offset().top) / 1.3 ;
            console.log($speed);
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
            }, $speed);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();

    // Scroll To Top

    $('.scroll_top svg').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Profile

    $('.section').click(function () {
        $('.profile_dropdown').toggleClass('show');
    });
    
    $('.registration').click(function () {
        $('.registration_side').addClass('show').removeClass('hide');
        $('.authorization').addClass('hide');
        $('.user_profile_dropdown_inside').addClass('height');
    });
    $('.back').click(function () {
        $('.authorization').removeClass('hide');
        $('.registration_side').addClass('hide');
        $('.user_profile_dropdown_inside').removeClass('height');
    });
});