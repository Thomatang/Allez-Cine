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
