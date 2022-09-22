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

function certificate_content1() {
    document.getElementById("certificate_content2").style.display = "flex";
    document.getElementById("certificate_content1").style.display = "none";
    document.getElementById("subtitle_content-1").style.color = "#2881bb";
    document.getElementById("subtitle_content-1").style.fontWeight = "700";
    document.getElementById("subtitle_content-2").style.fontWeight = "unset";
    document.getElementById("subtitle_content-2").style.color = "black";
}

function certificate_content2() {
    document.getElementById("certificate_content1").style.display = "flex";
    document.getElementById("certificate_content2").style.display = "none";
    document.getElementById("subtitle_content-2").style.color = "#2881bb";
    document.getElementById("subtitle_content-2").style.fontWeight = "700";
    document.getElementById("subtitle_content-1").style.fontWeight = "unset";
    document.getElementById("subtitle_content-1").style.color = "black";
}
