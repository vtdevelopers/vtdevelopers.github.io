$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this. scroll > 500){
            $('.scorll-up-btn').addClass("show");
        }else{
            $('.scorll-up-btn').removeClass("show");
        }
    });


    //slider-up
    $('.scorll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //  toggle menu bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    // owl-carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });
});