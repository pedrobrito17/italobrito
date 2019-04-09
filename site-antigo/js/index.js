// Nav - menu
$('nav a').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$('li a').click(function(){
    $('.collapse').removeClass('show');
});







// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var navbar;

$('.myImg').click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    navbar = $('#navbar').is(':visible');
    if(navbar){
        $('#navbar').hide();
    }else{
        $('#nav-pills').hide();
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";

  if(navbar){
    $('#navbar').show();
  }else{
    $('#nav-pills').show();
  }
}