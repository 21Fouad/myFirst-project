//navbar scroll
//let aboutOffset = $('.about').offset().top;
let homeHeight = $('.home').outerHeight();

$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();

    if (windowScroll >= homeHeight) {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'black'
        });
        $('.btn-up').fadeIn(2000);
    }
    else {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'transparent'
        });
        $('.btn-up').fadeOut(1000);
    }
    
});


//smooth scroll
$(".nav-link").click(function(){ 
    
    let hrefValue = $(this).attr("href");
    console.log(hrefValue);
    
    let offs = $(hrefValue).offset().top;

    $("body,html").animate({
        scrollTop:offs,
    },
    3000)
});


//loading page
$(document).ready(function () {
    $('.load').fadeOut(3000, function (){
        $('body').css('overflow', 'auto')
    });
});

//btn-up
$('.btn-up').click(function () {
    $('body,html').animate({
        scrollTop:0
    },1000)
});
//icons fadein and out
{
    $('.img-move1').mouseover(function () {
        $('.icon1').fadeIn(3000);
    });
    $('.img-move1').mouseleave(function () {
        $('.icon1').fadeOut(1000);
    });
    $('.img-move2').mouseover(function () {
        $('.icon2').fadeIn(3000);
    });
    $('.img-move2').mouseleave(function () {
        $('.icon2').fadeOut(1000);
    });
    $('.img-move3').mouseover(function () {
        $('.icon3').fadeIn(3000);
    });
    $('.img-move3').mouseleave(function () {
        $('.icon3').fadeOut(1000);
    });
    $('.img-move4').mouseover(function () {
        $('.icon4').fadeIn(3000);
    });
    $('.img-move4').mouseleave(function () {
        $('.icon4').fadeOut(1000);
    });
}