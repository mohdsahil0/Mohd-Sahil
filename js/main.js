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