
$(function (){

    "use strict";


    //smooth scroll
    $('.navbar-nav').singlePageNav({
        speed:1000,
        currentClass:'active',
        offset:70
    });

    // navbar scrolling background
    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar-default");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");

        }else{

            navbar.removeClass("nav-scroll");
        }
    });


    //smooth button scroll
    $('.button-scroll').on('click', function(){
      
        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

        "scrollTop": $('#'+scrollTo).offset().top - 60
        }, 1000 );

    }); 




    $(".dropdown").on("click",".dropdown-icon", function () {

        $(this).next().slideDown();

        $(".dropdown-info").not($(this).next()).slideUp();

    });


    // Progress Bar
    $(window).on('scroll', function () {
        $(".skills .skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).animate({
                  width : myVal
                }, 2000);
            }
        });
    });


   
    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    //trigger owlCarousel
    $('.client .owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        smartSpeed:500,
        mouseDrag:false,
        nav:true,
        navText:['<','>'],
        dots:false
    });


});


// Preloader

$(window).on("load",function (){

  $(".loading").fadeOut(500);

});

