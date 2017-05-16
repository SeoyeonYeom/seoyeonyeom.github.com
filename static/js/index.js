$(function(){

    var slide_width = $('body').outerWidth();

    $('.slide_container').css('width', slide_width * 4);
    $('.slide_container > div[class*="slide_"]').css({
        'width' : slide_width
    });

    movingSlide(0);

    $('.header .navigation li').on('click', function(){
        $('.header .navigation .clicked').removeClass('clicked');
        $(this).addClass('clicked');
    });

    $('.career_container .btn_slide > button').on('click', function(){
        if ($(this).hasClass('disabled')) {
            return;
        } else if ($(this).hasClass('animate')) {
            return;
        } else {
            $(this).addClass('animate');
            var $container = $(this).parents('.container_1').find('.slide_all');
            var offset = parseInt($container.css('left'));
            $container.animate({
                'left' : $(this).hasClass('btn_next')? (offset -= 640) : (offset += 640)
            }, 200, function(){
                $('button.animate').removeClass('animate');
            });
            if (offset == 0){
                $('.btn_prev').addClass('disabled');
            } else if (offset == -1920) {
                $('.btn_next').addClass('disabled');
            } else {
                $('.btn_prev').removeClass('disabled');
                $('.btn_next').removeClass('disabled');
            }
        }
    });

});


function movingSlide(count){
    setInterval(function(){
        var div_arr = $('.slide_container div[class*="slide"]');
        $('.slide_container div[class*="slide"]').css('display', 'none');
        $('.slide_container div.showed').removeClass('showed');
        var showed_div = div_arr[count++ % div_arr.length];
        var id = showed_div.getAttribute('id');
        $('#'+id).css('display', 'block');
        $('#'+id).addClass('showed');

        radioDot(id);
    }, 2000);
}


function radioDot(id){
    $('.dot_container').find('.fa-circle').attr('class', 'fa fa-circle-o');
    $('.dot_container'+' .'+id).find('.fa-circle-o').attr('class', 'fa fa-circle');
}
