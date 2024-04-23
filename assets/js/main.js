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

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 232, 3000);
    counter("count2", 0, 521, 3000);
    counter("count3", 0, 1463, 3000);
    counter("count4", 0, 15, 3000);
    
   });