$(".teacher_owlcarousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayTimeout: 2500,
    dots: true,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
        },
        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 4,
            nav: false,
        },
    },
});
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2500,

    dots: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});
