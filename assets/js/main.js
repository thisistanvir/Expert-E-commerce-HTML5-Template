(function ($) {
	"use strict";
    
// tooltip
    $('[data-toggle="tooltip"]').tooltip();

// Nice Select
    $('select').niceSelect();

// Nivo Slider
    $('#main-slider').nivoSlider({
		slices: 15,
		boxCols: 12,
		boxRows: 4,
		animSpeed: 600,
        startSlide: 0,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: true,
        directionNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
// Nivo Slider

// data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

// Start Slick Nav
    $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
// End Slick Nav

// Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
        $(".main-header").removeClass("sticky");
    } else {
        $(".main-header").addClass("sticky");
    }
  });

// WOW active
  var wow = new WOW({
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,         
    mobile:       true,       
    live:         true,  
});
    wow.init();
//  End Wow 

// Start Product Carousel
$('.carousel-product').owlCarousel({
    loop: true,
    dots: false,
    thumbs: false,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: false,
            autoplayTimeout:1000,
        autoplayHoverPause:true,
    margin: 30,
    responsive: {
    0:{
        items:1
    },
    767:{
        items: 3
    },
    992:{
        items: 4
    },
},
});

// Start Catalog Carousel //
$('.catalog-carousel').owlCarousel({
    items : 1,
    loop: true,
    dots: false,
    thumbs: false,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoplay: false,
            autoplayTimeout:1000,
        autoplayHoverPause:true,
});

// Start Thumb Carousel
$('.thumb-carousel').owlCarousel({
    loop: true,
    dots: false,
    thumbs: false,
    nav: true,
    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    autoplay: false,
            autoplayTimeout:3000,
        autoplayHoverPause:true,
    margin: 15,
    responsive: {
    0:{
        items:3
    },
    767:{
        items:3
    },
    992:{
        items: 3
    },
    1200:{
        items: 4
    },
},
});
// End Thumb Carousel

// Tab With Carousel Activation
    let activeTab = $('#thumbTab a').filter('.active');
    $('#thumbTab a').click(function(e) {
    e.preventDefault();

    activeTab.removeClass('active');
    $(activeTab.attr('href')).removeClass('active');

    activeTab = $(this);

    activeTab.addClass('active');
    $(activeTab.attr('href')).addClass('active');
    })
// Tab With Carousel Activation

// Quantity Btn 
    $(".qtybtn").on("click", function() {
        var $btn = $(this),
            $oldValue = $btn.parent().find("input").val();
        if ($btn.text() == "+") {
            var $newVal = parseFloat($oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if ($oldValue > 1) {
                var $newVal = parseFloat($oldValue) - 1;
            } else {
                $newVal = 1;
            }
        }
        $btn.parent().find("input").val($newVal);
    });
// Quantity Btn

// Price Range
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
        " - £" + $( "#slider-range" ).slider( "values", 1 ) );
// Price Range 

// Elevate Zoom
$("#zoom_img1, #zoom_img2, #zoom_img3, #zoom_img4, #zoom_img5, #zoom_img6").elevateZoom({
    zoomWindowWidth:300,
    zoomWindowHeight:300,
});

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 300, 
        animation: 'fade', 
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-arrow-up"></i>', 
        activeOverlay: false, 
    });
//   Scroll Up
})(jQuery);
