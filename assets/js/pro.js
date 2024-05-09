$('.hamburger').click(function(){
    $(this).toggleClass('active');
    $('.navbar').toggleClass('active')
});
$('.menu_item').hover(
    function(){
        $('.menu_item').parent().find('.sub_menu').removeClass('active')
        $(this).find('.sub_menu').addClass('active')
    },
    function(){
        $(this).find('.sub_menu').removeClass('active')
    }
)

// slide gallery
var galleryCar = new Swiper(".galleryCar", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 70,
    loop:true,
    grabCursor: true,
    breakpoints:{
        0:{
            spaceBetween: 5,
            slidesPerView: 4,
        },
        1024:{
            slidesPerView: 5,
            spaceBetween: 70,
        }
    }
  });