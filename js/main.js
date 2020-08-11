$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    $(".arro-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    if ($(window).width() > 991) {
        $('select.selectpicker').selectpicker({});
    }
    if ($(window).width() <= 991) {
        $(".search-select").removeClass("selectpicker");
        $(".search-select").addClass("mobile-select");
        $(".search-select").wrap('<div class="mobile-select-cont"></div>');
    }
    ///////// **museum Slider** /////////
    var museumswiper = new Swiper('.museums-slider .swiper-container', {
        spaceBetween: 24,
        loop: true,
        pagination: {
            el: '.museums-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.museums-slider .swiper-button-next',
            prevEl: '.museums-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    ///////// **bestSeller Slider** /////////
    var eventswiper = new Swiper('.events-slider .swiper-container', {
        spaceBetween: 23,
        loop: true,
        pagination: {
            el: '.events-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });
    ///////// **States** /////////
    if ($(window).width() <= 991) {
        $(".states").addClass("swiper-container");
        $(".states .state").addClass("swiper-slide");
        $(".states .state").wrapAll("<div class='swiper-wrapper'></div>");
        var home_serviceswiper = new Swiper('.states', {
            loop: true,
            pagination: {
                el: '.states .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
            },
        });
    }
    ///////// **areas** /////////
    if ($(window).width() <= 991) {
        $(".areas").addClass("swiper-container");
        $(".areas .area").addClass("swiper-slide");
        $(".areas .area").wrapAll("<div class='swiper-wrapper'></div>");
        var home_serviceswiper = new Swiper('.areas', {
            loop: true,
            pagination: {
                el: '.areas .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 1199) {
        $('.burger').click(function () {
            $("nav").fadeToggle(300);
            $(".nav-cont").toggleClass("nav-in");
            $("body").toggleClass("overflow");

            $('div.burger').toggleClass('open');
            $('div.x, div.y, div.z').toggleClass('collapse');

            setTimeout(function () {
                $('div.y').toggle();
                $('div.x').toggleClass('rotate30');
                $('div.z').toggleClass('rotate150');
            }, 70);
            setTimeout(function () {
                $('div.x').toggleClass('rotate45');
                $('div.z').toggleClass('rotate135');
            }, 120);
        });
    }
});