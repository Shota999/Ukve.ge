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
            $speed = Math.abs($(window).scrollTop() - $($(this).attr('href')).offset().top) / 1.3;
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


    // kalata

    $('.cart_button').click(function () {
        $('.cart_body').toggleClass('show');
    });

    // info
    $('.info_button').click(function () {
        $(this).parent().find('.info_body').toggleClass('show');
    });

    // gverdze ro daaklikeb ro gaqres gamochenili elementi

    $("body").click(function (n) {
        if ($('.profile_dropdown').hasClass('show') && n.target.closest(".profile") == null) {
            $('.profile_dropdown').toggleClass('show');
        }

        if ($('.cart_body').hasClass('show') && n.target.closest(".cart") == null) {
            $('.cart_body').toggleClass('show');
        }

        if ($('.info_body').hasClass('show') && n.target.closest(".info") == null) {
            $('.info_body').toggleClass('show');
        }

        if ($('.more').hasClass('show') && n.target.closest(".actions") == null) {
            changeText();
        }

    });

    $('.choose').click(function () {
        $(this).toggleClass('checked');
        return false;
    });

    $('.radio').click(function () {
        changeText(this.innerText);
    });

    function changeText(str = null) {
        if (str) {
            $('.sauce.active p').text(str.length > 12 ? str.slice(0, 12) + "..." : str);
        }
        $('.more.show').removeClass('show');
    }


    //  Alert

    $('.check_cart').click(function () {
        // if ($("input[name='group1']")) {
        //     // alert();
        //     console.log();
        // }
        console.log("input[name='group1']".val());
    });

    // Count

    $('.counter_plus').click(function() {
        $('.count').html(function(i, val) { return val*1+1 });
    });
    $('.counter_minus').click(function() {
        $('.count').html(function(i, val) { return val*1-1 });
    });
});