
$(function(){
    $('.career_container .box1 .btn_slide > button').on('click', function(){
        if ($(this).hasClass('disabled')) {
            return;
        } else if ($(this).hasClass('animate')) {
            return;
        } else {
            $(this).addClass('animate');
            var $container = $(this).parents('.cont_img').find('.slide_all');
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
