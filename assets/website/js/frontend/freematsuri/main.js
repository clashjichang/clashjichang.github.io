(function($){
    "use strict";
    jQuery(document).on('ready',function() {
        /* Header Sticky
        ========================================================*/
        $(window).on('scroll',function() {
            if ($(this).scrollTop() >50){  
                $('.header-sticky').addClass("is-sticky");
            }
            else{
                $('.header-sticky').removeClass("is-sticky");
            }
        });
        
        // Nav Active Code
        /*==============================================================*/
        if ($.fn.classyNav) {
            $('#eduNav').classyNav({
                theme: 'light'
            });
        }
        
        // Search Popup Js
        /*==============================================================*/
        $(function() {
            $('a[href="#search"]').on("click", function(event) {
                event.preventDefault();
                $("#search").addClass("open");
                $('#search > form > input[type="search"]').focus();
            });

            $("#search, #search button.close").on("click keyup", function(event) {
                if (
                event.target == this ||
                event.target.className == "close" ||
                event.keyCode == 27
                ) {
                    $(this).removeClass("open");
                }
            });

            $("form").on('submit',function(event) {
                event.preventDefault();
                return false;
            });
        });
        
        /* Zoom Gallery
        ========================================================*/
        $('.zoom-gallery').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });
        
        /* Popup Video
        ========================================================*/
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        
        // Wow Js
        /*==============================================================*/
        new WOW().init();
        
        /* Home Slides
        ========================================================*/
        $('.home-slides').owlCarousel({
            items:1,
            loop:false,
            autoplay:false,
            nav:false,
            responsiveClass:true,
            dots:false,
            autoplayHoverPause:false,
            mouseDrag:false,
            navText: [],
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".main-banner h3").removeClass("animated fadeInDown").css("opacity", "0");
            $(".main-banner h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".main-banner p").removeClass("animated zoomIn").css("opacity", "0");
            $(".main-banner .btn").removeClass("animated fadeInDown").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".main-banner h3").addClass("animated fadeInDown").css("opacity", "1");
            $(".main-banner h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".main-banner p").addClass("animated zoomIn").css("opacity", "1");
            $(".main-banner .btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        
        // Attorneys Slider
        /*==============================================================*/
        $(".attorneys-slider").owlCarousel({
            nav: true,
            dots: false,
            center: false,
            touchDrag: false,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        // Counter Up
        /*==============================================================*/
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
        
        // Blog Slider
        /*==============================================================*/
        $(".blog-slider").owlCarousel({
            nav: true,
            dots: false,
            center: false,
            touchDrag: false,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        // Testimonials Slider
        /*==============================================================*/
        $(".testimonials-slider").owlCarousel({
            nav: false,
            dots: false,
            center: false,
            touchDrag: true,
            mouseDrag: true,
            autoplay: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:2,
                }
            }
        });
        
        // Partner Slider
        /*==============================================================*/
        $(".partner-slider").owlCarousel({
            nav: false,
            dots: false,
            center: false,
            touchDrag: true,
            mouseDrag: true,
            autoplay: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:2,
                },
                576:{
                    items:4,
                },
                768:{
                    items:4,
                },
                1200:{
                    items:6,
                }
            }
        });
        
        // Participated Case Slider
        /*==============================================================*/
        $(".participated-case-slider").owlCarousel({
            nav: false,
            dots: false,
            center: false,
            touchDrag: true,
            mouseDrag: true,
            autoplay: true,
            smartSpeed: 750,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });
        
        /* About Image Slider
        ========================================================*/
        $('.about-image-slider').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            nav:true,
            responsiveClass:true,
            dots:false,
            autoplayHoverPause:true,
            mouseDrag:true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
        });
        
        
        /* Product Img
        ========================================================*/
        $('.product-img-slider').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            nav:true,
            responsiveClass:true,
            dots:false,
            autoplayHoverPause:true,
            mouseDrag:true,
            navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
        });
        
        /* Go To Top
        ========================================================*/
        $(function(){
            //Scroll event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });  
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
    });


    // Page Loader
    /*==============================================================*/
    jQuery(window).on('load', function() {
        $('#preloader-area').fadeOut();
    });
}(jQuery));
