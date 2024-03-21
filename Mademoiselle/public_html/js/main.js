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



});
