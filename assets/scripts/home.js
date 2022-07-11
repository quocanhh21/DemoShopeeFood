var checkPoint = $(".end-check-point").offset().top;

var target= checkPoint - $(window).height() - 100;


 $(window).scroll(function() {
    if ($(window).scrollTop() >= target) {
        $("#banner").css({
            'position':'absolute',
            'top': '1480px'
        });
    }else{
        $("#banner").css({
            'position':'fixed',
            'top': '70px'
        });
    }
}); 

