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
        loop: $('.main-slider-wrapper').children().length > 5 ? true : false,
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


    $('.cart_items .close').click(function () {
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

    // $('.deleteProducts').click(function () {
    //     $('.products_table tbody').fadeOut();
    //     setTimeout(function () {
    //         $('.products_table tbody').remove();
    //     }, 3000);
    //     colseModal();
    // });

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

    // cart delete item

    // $('.products_table .remove').click(function () {
    //     let item = $(this).closest("tr")
    //     item.fadeOut();
    //     setTimeout(function () {
    //         item.remove();
    //     }, 3000);
    // });

    $('table .remove').click(function () {
        let item = $(this).closest("tr")
        item.fadeOut();
        setTimeout(function () {
            item.remove();
        }, 3000);
    });

    $(".tel svg").click(function () {
        $(this).removeClass("active");
        $(this).siblings("svg").addClass("active");
        $('.tel_input input').prop('disabled', function(i, v) { return !v; });
    });

    $(".more_order").click(function () {
        $(this).siblings(".hidden_order").css("height" , "auto");
        $(this).siblings(".hidden_order").find(".opacity").removeClass("opacity");
        $(this).remove();
    });

    // select

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        if (selElmnt.getElementsByTagName("option").length > 0) {
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function(e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                    }
                    h.click();
                    changeDistrict(s);
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function(e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
});
