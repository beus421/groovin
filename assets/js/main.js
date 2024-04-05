$(document).ready(function () {
    $('.mainSlider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });


    jQuery(".btnHam").click(function(){
        jQuery(".menuCustom").toggleClass("active");
    });

    jQuery('.fadeslick').slick({
        accessibility:true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'ease-in-out'
      });
});
