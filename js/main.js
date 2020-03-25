$(document).ready(function() {

    // Accordion module
    if ($('#accordion').length) {

        $('#accordion').click(function(e) {

            if ($(e.target).hasClass('accordion__btn')) {
                $(e.target).closest('.accordion__item').toggleClass('active');
                $(e.target).closest('.accordion__item').find('.accordion__price').slideToggle();
            }
        });
    }

    // HOME
    if ($('#home').length) {
        // Header style befor scrolling
        const headerBefore = {
            "position": "fixed",
            "background": "transparent",
        };
        const colorBefore = {
            "color": "#fff"
        };
        const fillBefore = {
            "fill": "#fff"
        };
        // Header style after scrolling
        const headerAfter = {
            "background": "#FAF8F4"
        };
        const colorAfter = {
            "color": "#000"
        };
        const fillAfter = {
            "fill": "#000"
        };
        // Change header after scrolling
        $('#header').css(headerBefore);
        $('#header').find('svg').css(fillBefore);
        $('#nav').find('.nav__link').css(colorBefore);
        $(document).scroll(function() {
            if ($(window).scrollTop() > 30) {
                $('#header').css(headerAfter);
                $('#header').find('svg').css(fillAfter);
                $('#nav').find('.nav__link').css(colorAfter);
            } else {
                $('#header').css(headerBefore);
                $('#header').find('svg').css(fillBefore);
                $('#nav').find('.nav__link').css(colorBefore);
            }
        })

        // Banner section slider
        if ($('.home__slider_list').length) {
            $('.home__slider_list').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.home__slider_arrow--prev'),
                nextArrow: $('.home__slider_arrow--next'),
                // autoplay: true,
                fade: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }

        // Beauty section slider
        if ($('.home__services_list').length) {
            $('.home__services_list').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.home__services_slider_arrow--prev'),
                nextArrow: $('.home__services_slider_arrow--next'),
                // autoplay: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }

        // News section slider
        if ($('.home__news_list').length) {
            $('.home__news_list').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.home__news_slider_arrow--prev'),
                nextArrow: $('.home__news_slider_arrow--next'),
                // autoplay: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }
    }

    // SALT ROOM
    if ($('#salt_room').length) {

        // Page top slider
        if ($('.slider__list').length) {
            $('.slider__list').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.salt_room__slider_arrow--prev'),
                nextArrow: $('.salt_room__slider_arrow--next'),
                // autoplay: true,
                fade: true,
                centerMode: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }
    }

    // SPECIFIC SERVICE
    if ($('#specific_service').length) {

        // Page top slider
        if ($('.slider__list').length) {
            $('.slider__list').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.specific_service__slider_arrow--prev'),
                nextArrow: $('.specific_service__slider_arrow--next'),
                // autoplay: true,
                fade: true,
                centerMode: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }
    }

    // ABOUT
    if ($('#about').length) {

        // Page top slider
        if ($('.slider__list').length) {
            $('.slider__list').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('.about__slider_arrow--prev'),
                nextArrow: $('.about__slider_arrow--next'),
                // autoplay: true,
                fade: true,
                centerMode: true,
                speed: 1000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            infinite: true
                        }
                    },
                ]
            });
        }
    }
});