$(document).ready(function () {

    $('#menu').click(function () {
        console.log('Menu clicked');
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});