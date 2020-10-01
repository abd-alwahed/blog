
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $("toggle-collapse").click(function () {
        $(".nav").toggleClass("collapse");
    })
// owl-corausel  ///
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:8000,
    
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:3,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },2000);
})


//aos

AOS.init();

}); 