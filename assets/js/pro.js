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

let modal_btn = document.querySelectorAll('.modal_btn');
let modal_close = document.querySelectorAll('.modal_close');
let modal = document.querySelector('.modal');
let modal_bg = document.querySelector('.modal_bg');

modal_btn.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('active');
        modal_bg.classList.add('active');
    })
})

modal_bg.addEventListener('click', () => {
    modal.classList.remove('active');
    modal_bg.classList.remove('active');
})

modal_close.forEach(item2 => {
    item2.addEventListener('click', () => {
        modal.classList.remove('active');
        modal_bg.classList.remove('active');
    })
})


// slide gallery
let galleryCar = new Swiper(".galleryCar", {
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