new Swiper(".projects__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',      
      },
    autoplay: {
        delay: 5000,
    },
    grabCursor: true,    
    breakpoints: {
        320: { 
            slidesPerView: 1,          
            delay: 3000,
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        760: {
            slidesPerView: 2,
        },
        1080: {
            slidesPerView: 3,
        },
    }, 
});

new Swiper('.swiperLogo', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true, 
    grabCursor: true, 
    autoplay: {
        delay: 3000,
    },  
    breakpoints: {
        320: { 
            slidesPerView: 2,          
            delay: 3000,
        },
        560: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        760: {
            slidesPerView: 4,
        },
    }, 

});