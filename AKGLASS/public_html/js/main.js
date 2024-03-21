$(document).ready(function () {




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


    animation();
    $(window).scroll(function () {
        animation();
        checkHeader();
    });


// animation end



    $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-plus fa-minus');
        $(this).parent().next('.submenu').slideToggle();
    });

    if($('.team-slider').length > 0){
        $('.team-slider').owlCarousel({
            autoplay: true,
            nav: false,
            loop: true,
            responsive:{
                0: {
                    items: 1,
                    margin: 0
                }
            }
        });
    }



    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject:{
                         required: true
                    },
                    message:{
                        required: true
                        
                    }
                },
                messages: {
                   name: {
                        required: 'Name* is required field!!!'
                    },
                    email: {
                        required: 'Email* is required field!!!',
                        email: 'Please insert valid Email address!!!'
                    },
                    subject:{
                         required: 'Subject* is required field!!!'
                    },
                    message:{
                        required: 'Message* is required field!!!',
                        maxlength: 'Max Message length is 255 characters !!!'
                        
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-msg'));
                }

            });
        });
    }//Form Validation


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

});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    item:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

/*$(document).ready(function () {
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


});*/