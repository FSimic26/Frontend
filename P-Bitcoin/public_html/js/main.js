$(document).ready(function () {
   function checkHeader() {
        let scrollSize = $(window).scrollTop();
        if (scrollSize > 100) {
            $('header').addClass('scaled');
        } else {
            $('header').removeClass('scaled');
        }
    }
    checkHeader();
    $(window).scroll(function () {
        checkHeader();
        animation();
    });

// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }



    animation();

// animation end


    if ($('.team').length > 0) {
        $('.team').owlCarousel({
            autoplay: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }


        });
    }



    if ($('.started').length > 0) {
        $('.started').owlCarousel({
           autoplay: true,
            loop: true,
          

            responsive: {
                0: {
                    items: 1
                   
                },
                500: {
                    items: 1

                },
                768: {
                    items: 1

                },
                992: {
                    items: 1
                }
            }


        });
    }






    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


});