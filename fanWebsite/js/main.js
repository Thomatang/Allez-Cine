// =======================  NAVBAR SCROLL effect ==================================

$(document).ready(function() {

    $("#newsNav").click(function() {

        $('html, body').animate({
            scrollTop: $("#news").offset().top - 97.5
        }, 500);
    })
    $("#characterNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#character").offset().top - 97.5
        }, 500);
    })
    $("#galleryNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 97.5
        }, 500);
    })
    $("#shopNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#shop").offset().top - 97.5
        }, 500);
    })
    $("#contactNav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 97.5
        }, 500);
    })

});

// ========== FORM VALIDATION section ================================

$('#submitbtn').click(function(){
  if ($('#fname').val() == '') { $('#fname').css('border-color', 'red'); } else { $('#fname').css('border-color', 'green'); }
  if ($('#lname').val() == '') { $('#lname').css('border-color', 'red'); } else { $('#lname').css('border-color', 'green'); }
  if ($('#subject').val() == '') { $('#subject').css('border-color', 'red'); } else { $('#subject').css('border-color', 'green'); }
})
