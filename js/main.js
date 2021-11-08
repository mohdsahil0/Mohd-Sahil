$(document).ready(function() {
    $('#toggle').click(function() {
        $('#ann-navbar-spy').toggleClass("main-menu-show");
        $('#toggle').toggleClass("active");
    });
});

window.addEventListener('scroll', function() {
    let header = document.querySelector('.nav-bar');
    header.classList.toggle('scrolling-active', window.scrollY > 200);
})

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        slideSpeed: 1000,
        singleItem: true,
        transitionStyle: "goDown",
        navigationText: ["", ""],
        autoPlay: false
    });
});