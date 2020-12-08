$(document).ready(function(){
    $('.owl-carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    $('.owl-carousel-0').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
       // $('.owl-carousel-1 .owl-nav').removeClass('disabled');

});
$(document).ready(function(){
    $('#sd').click(function(){
        $('#sidebarl').removeClass('closed');
        $('#sidebarl').addClass('opened');
    });
    $('#cl').click(function(){
        $('#sidebarl').removeClass('opened');
        $('#sidebarl').addClass('closed');
    });
    $('.cartop').click(function(){
        $('#sidebarr').removeClass('closed');
        $('#sidebarr').addClass('opened');
    });
    $('#cartcls').click(function(){
        $('#sidebarr').addClass('closed');
        $('#sidebarr').removeClass('opened');

    });

})
$(document).ready(function(){
    $('#addcart').click(function(){
        $(".pc-btn").addClass('d-none');
        $('.cartpc').removeClass('d-none');
    });
})