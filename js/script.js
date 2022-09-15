var swiper1 = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 2,
        },
        668: {
            slidesPerView: 3,
        },
        1150: {
            slidesPerView: 4,
        },
    },
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        320: {
            slidesPerView: 2,
        },
        650: {
            slidesPerView: 4,
        },
        950: {
            slidesPerView: 6,
        },
        1025: {
            slidesPerView: 7,
        },

    },
});