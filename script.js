$(document).ready(function () {

    $('#menu').click(function () {
        console.log("hello world")
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        $('.main-container').toggleClass('blurred');

    });
    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        $('.main-container').removeClass('blurred');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });
    $('a[href*="a"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,


        },
            500,
            'linear'
        )

    })

});

