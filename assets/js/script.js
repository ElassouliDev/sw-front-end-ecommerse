"use strict";

function sliderProducts() {
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

}

function loading() {
    setTimeout(function () {
        $('#loader-wrapper').fadeOut('slow');
    }, 10)
}

function handleScroll(e) {
    $(document).scroll(function () {
        var offset = $(this).scrollTop();
        // if (offset > 100) {
        //     $('#fixedHeader').animate({
        //         position: 'fixed',
        //         top: '0',
        //         width: '100%',
        //         'z-index': 9999
        //     }).fadeIn('show');
        // } else {
        //     $('#fixedHeader').animate({
        //         position: 'relative',
        //         top: 'unset',
        //         transition: 'position 1s linear'
        //     }).fadeOut('slow')
        // }
    })
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

$('.carousel').carousel({
    interval: false
})

function loadingBtn() {
    $('.btn-loading').click(function () {
        var btn_loading = $(this);
        btn_loading.addClass('disabled');
        btn_loading.find('.btn-loading-show').removeClass('d-none')
        btn_loading.find('.title').addClass('d-none')
        setTimeout(function () {
            btn_loading.removeClass('disabled');
            btn_loading.find('.btn-loading-show').addClass('d-none')
            btn_loading.find('.title').removeClass('d-none')
        }, 1000)
    })
}

function lightSlider() {
    $('#product_details_gallery').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 587,
        vThumbWidth: 134.95,
        adaptiveHeight: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        thumbMargin: 2,
        slideMargin: 2,
        controls: false,
        enableTouch: false,
        enableDrag: false,
    });
}

jQuery(document).ready(function () {
    (function ($) {
        handleScroll();
        sliderProducts();
        loadingBtn();
        // lightSlider();
        loading();
    })(jQuery);

});