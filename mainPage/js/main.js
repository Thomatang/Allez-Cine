// BUTTON TO TOP FUNCTION
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// MODAL CONTACT US

    $("#sendmsg").on("click",function(){
        $("#myModal").modal("show");
    });
