$(document).ready(function () {

    $('.sauce').click(function () {
        $(this).toggleClass('active');
    });
    $('.sauce').click(function () {
        $(this).parent('.actions').find('.hidden_more').toggleClass('show');
    });
    $('.nav_button').click(function () {
        $(".menu").addClass('show');
        $('body').addClass('hidden');
    });
    $('.close_button').click(function () {
        $(this).parents('.menu').removeClass('show');
        $('body').removeClass('hidden');
    });

    // Map

    $('.zone_button').click(function () {
        $(".hide_map").addClass('show_map');
        $('body').addClass('hidden');
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
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.slider_button_next',
            prevEl: '.slider_button_prev',
        },
    });

    var swiper = new Swiper('.inner-slider', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {
            nextEl: '.inner_button_next',
            prevEl: '.inner_button_prev',
        },
        loop: true,
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
            $('.info_body').removeClass('show');
        }

        if ($('.hidden_more').hasClass('show') && n.target.closest(".sauce") == null) {
            changeText();
        }

        if ($('.category').hasClass('border') && n.target.closest(".category") == null) {
            $('.category').removeClass('border');
        }
        if ($('.hide_category').hasClass('show_category') && n.target.closest(".category") == null) {
            $('.hide_category').removeClass('show_category');
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
        $('.hidden_more.show').removeClass('show');
        $('.sauce.active').removeClass('active');
    }


    //  Alert

    $('.check_cart').click(function () {
        let check = false;
        let actions = $(this).closest('.actions');
        actions.find('input[type=radio]').each(function () {
            if (this.checked) {
                check = true;
            }
        });
        if (!check) {
            actions.find('.sauce').addClass('bounce');
            actions.closest('.bottom_container').siblings('.top_container').find('.alert').addClass('show')
            setTimeout(function () {
                actions.find('.sauce').removeClass('bounce');
            }, 700)
            setTimeout(function () {
                $('.alert').removeClass('show');
            }, 2000)
        } else {
            $(".successfully_add").addClass('show');
        }
    });

    // Count

    $('.counter_plus').click(function () {
        $(this).siblings(".count").html(function (i, val) {
            return Number(val) + 1
        });
    });

    $('.counter_minus').click(function () {
        $(this).siblings('.count').html(function (i, val) {
            return (val > 1) ? val - 1 : val
        });
    });

    // Item Remove


    $('.close').click(function () {
        let item = $(this).closest(".item")
        item.fadeOut();
        setTimeout(function () {
            item.remove();
        }, 3000);
    });

    // Blog Js

    $('.category').click(function () {
        $(".hide_category").toggleClass('show_category');
        $(this).toggleClass('border');
    });


    // FAQ

    $('.toggle').click(function (e) {
        e.preventDefault();

        let $this = $(this);

        if ($this.next().stop().hasClass('show')) {
            $this.next().stop().removeClass('show');
            $this.next().stop().slideUp(350);
            $this.find(".minus").hide();
            $this.find(".plus").show();
        } else {
            $this.parent().stop().parent().find('li .inner').removeClass('show');
            $this.parent().stop().parent().find('li .inner').slideUp(350);
            $this.next().stop().toggleClass('show');
            $this.next().stop().slideToggle(350);
            $this.find(".plus").hide();
            $this.find(".minus").show();
        }
    });

    //   Contact

    $(".block").slice(0, 3).css('display', 'flex');
    $(".show_more").on('click', function (e) {
        e.preventDefault();
        $(".block:hidden").slice(0, 3).css('display', 'flex');
        if ($("div:hidden").length == 0) {
            // $(".show_more").fadeIn('slow');
            // $(".show_more").hide();
            // $("#loadMore").text('Load only the first 4');
        }
    });
    $('.modal').click(function (e) {
        if(e.target.closest(".modal-content") == null){
            colseModal()
        }
    });

    // modals 
    function openModal(target){
        $("#"+target).addClass('show_modal');
        $('body').addClass('hidden');
    }
    function colseModal(){
        $(".modal").removeClass('show_modal');
        $('body').removeClass('hidden');
    }

    $('.modal-button').click(function () {
        button = $(this)
        var target = button.data("target");
        openModal(target);
    });

    $('.close').click(function () {
        colseModal();
    });

    $('.deleteCard').click(function () {
        colseModal();
        return false;
    });

    $('.deleteCard').click(function () {
        colseModal();
        return false;
    });

    $('.wantDrink').click(function () {
        button.parent(".card").remove();
        colseModal();
    });
    $('.now').click(function () {
        colseModal();
    });

    // Order

    $('.top_container').click(function () {
        $(".inner_content").toggleClass('show_content');
        $(".price_arrow>svg").toggleClass("rotate_svg");
    });

    $(".hidden_order").scroll(function(e) {
        let scroll = $(this).scrollTop();
        let count = $(this).children().length;
        let i = Math.ceil(scroll/70);
        removeOpClass(i);
        addOpClass(i+1, count);
    });

    function addOpClass(i, j) {
        for (let k = i; k <= j; k++) {
            $(".order_content:eq( "+ k +" )").addClass('opacity');
        }
    }

    function removeOpClass(i) {
        for (let k = 0; k <= i; k++) {
            $(".order_content:eq( "+ k +" )").removeClass('opacity');
        }
    }
    // I get

    $('.i_get>.radio_category').click(function () {
        $(this).toggleClass("active");
    });

});