// Opening Features :
//* ask age and restrict access to minors and redirect them to IMDB
// * display cookie warning
// * formulaire de connexion

// display opening modal on page load
$(document).ready(function(){
      //Disply the modal popup
        $('#openingModal').show();
});
//close modal when click on 18 years or older button
$('#AdultButton').click(function() {
  $('#openingModal').hide();
})

// modal login form
$("#loginButton").click(function(){
      //Disply the modal popup
        $('#loginModal').show();
});

$("#loginButton2").click(function(){
      //hide the modal popup
        $('#loginModal').hide();
});

//Dispplay terms and conditions checkbox and complete registration button
$("#registerButton").click(function(){
        $('#registerTerms').show();
        $("#loginButton2").hide();
        $(this).hide();
        $("#registerButtonFinal").show();
});
//make connexion form disappear when clicking on final registration button
$("#registerButtonFinal").click(function(){
  $('#loginModal').hide();
})
$("#closeButton").click(function(){
        $('#loginModal').hide();
});

//=========================================   MOVIE SECTION MODAL TO SHOW YOUTUBE TRAILERS==================

$('#citizenSoldier').on("click", function(){
  $('#citizenSoldierModal').modal('show')
})
$('#xMen').on("click", function () {
  $('#xMenModal').modal('show')
})
$('#greater').on("click", function () {
  $('#greaterModal').modal('show')
})
$('#theLightBetweenOceans').on("click", function () {
  $('#theLightBetweenOceansModal').modal('show')
})
$('#bfg').on("click", function () {
  $('#bfgModal').modal('show')
})
//==============================================
// BUTTON TO TOP FUNCTION
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
