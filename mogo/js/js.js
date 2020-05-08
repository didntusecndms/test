$(document).ready(function(){
  $("#first").click(function(){
    $("#firstt").toggle(500);
    });
     $("#second").click(function(){
    $("#secondd").toggle(500);
  });
    $("#third").click(function(){
        $("#thirdd").toggle(500);
    });
 });



$(document).ready(function(){
    $('.reviews').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        speed: 1500,
        easing:'ease',
        infinite:true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover:true,
        draggable:false,
        swipe: false, /* для тачскринов */
        touchThreshold: 10, /* для тачскринов */
        touchMove: false,
        waitForAnimate: true,
        centerMode:false,
        variableWidth:false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false, /* Для вертикального слайдера*/
        verticalSwiping:true,
        fade:false,/* Слайды заменяются один на второй*/
       /*Привязка одного слайдера ко второму  asNavFor: ".sliderbig";*/
        /*АДаптация*/responsive: [
        {
        breakpoint: 768,
            settings:{ rows: 1,
                      autoplay:false,


            }
    },{
        breakpoint: 400,
        settings: {
            autoplay:true,/*любое значение*/
        }
    }
        ]
    });

  /*  $('.sliderbig').slick({
        arrows:false,
        fade:true,
        asNavFor: ".reviews";
    });*/
});
































