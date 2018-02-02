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

//==================================== FEATURED MOVIES SECTION =================================================
//==================================== FEATURED MOVIES SECTION =================================================
  //show ALL movies when click on "ALL" button
$("#allMovies").on("click", function(){
  $(".featuredMovies").show();
})
  // only display Action movies when clicking on "Action" button
$("#actionMovies").on("click", function () {
  $(".thriller, .comedy").hide();
  $(".action").show();
})
// only display Thrillers movies when clicking on "Thrillers" button
$("#thrillerMovies").on("click", function () {
  $(".action, .comedy").hide();
  $(".thriller").show();
})
// only display Comedy movies when clicking on "Comedies" button
$("#comedyMovies").on("click", function () {
  $(".action, .thriller").hide();
  $(".comedy").show();
})

// hide second movie container when opening the document
$( document ).ready(function(){
  $(".featuredMoviesContainer2").hide()
  $(".lessMovies").hide();
})
// toggle content as user clicks on "MORE MOVIES" AND "LESS MOVIES" buttons
 $("#toggleMoviesButton1, #toggleMoviesButton2").on("click", function(){
  $(".featuredMoviesContainer2").toggle()
  $(".moreMovies").toggle();
  $(".lessMovies").toggle();
 
})
//==================================== FEATURED MOVIES SECTION END =================================================
//==================================== FEATURED MOVIES SECTION END =================================================

