// Nav - menu
$('nav a').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
});
$('li a').click(function(){
    $('.collapse').removeClass('show');
});
