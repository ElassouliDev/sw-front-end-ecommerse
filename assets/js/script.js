var swiperMat = new Swiper('.swiper-container', {
    slidesPerView: 9,
    centeredSlides: true,
    spaceBetween: 10,
    freeMode: true,
    loop: false,
    setWrapperSize: true,
    initialSlide: 3,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 9,
            spaceBetween: 10,
        },
    }
});

$(document).ready(function () {
    setTimeout(function () {
        $('#loader-wrapper').animate().hide('slow');
    }, 10)
});
$(window).on("load", function () {
    setTimeout(function () {
        $('#loader-wrapper').animate().hide('slow');
    }, 1000)
});

$(document).ready(e => handleScroll(e))
$(document).scroll(e => handleScroll(e))

function handleScroll(e) {
    var offset = $(this).scrollTop();
    if (offset > 150) {
        $('#fixedHeader').addClass('fixedHeader');
    } else {
        $('#fixedHeader').removeClass('fixedHeader');
    }
}

// List Items Pages
$(function () {
    $('.list-group-item').on('click', function () {
        $(this).toggleClass('focus');
        $('.fa', this)
            .toggleClass('fa-chevron-right')
            .toggleClass('fa-chevron-down');
    });
});