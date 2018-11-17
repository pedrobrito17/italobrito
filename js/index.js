// Nav - menu
$('nav a').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$('li a').click(function(){
    $('.collapse').removeClass('show');
});


$(".abrirModal").click(function() {
    var url = $(this).find("img").attr("src");
    $("#myModal img").attr("src", url);
    $("#myModal").modal("show");
});
