$(document).ready(function() {


});

// =======================  NAVBAR SCROLL effect ==================================
$("#newsNav").click(function () {
    
    $('html, body').animate({
        scrollTop: $("#news").offset().top-97.5
    }, 2000);
})
$("#characterNav").click(function () {
    $('html, body').animate({
        scrollTop: $("#character").offset().top-97.5
    }, 2000);
})
        $("#galleryNav").click(function () {
$('html, body').animate({
    scrollTop: $("#gallery").offset().top - 97.5
    }, 2000);
})
            $("#shopNav").click(function () {
$('html, body').animate({
    scrollTop: $("#shop").offset().top - 97.5
    }, 2000);
})
$("#contactNav").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 97.5
    }, 2000);
})