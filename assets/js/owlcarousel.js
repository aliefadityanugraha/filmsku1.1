const left = '<i class="bi bi-arrow-left owl-left"></i>';
const right = '<i class="bi bi-arrow-right owl-right"></i>';

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:10,
    responsiveClass:true,
    mouseDarg :true,
    autoWidth:true,
    slideBy:7,
    dots:true,
    navText:[left, right],
    responsive:{
        0:{
            items:4,
            nav:false,
            loop:false
        },
        600:{
            items:5,
            nav:false,
            loop:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
});
});
