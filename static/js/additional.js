
$(function(){

    appendDetail("about");
    appendDetail("works");

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

    drawRat();
    drawFoot();
});

function appendDetail(pg){
    var nav_leng = $('.'+pg+'_wrapper .small_nav li').length;
    if (pg == 'about'){
        for ( var i=0; i<nav_leng; i++ ){
            $('.'+pg+'_wrapper .content_section').append(renderTpl('#tpl_About'+(i+1)));
        }
    } else if (pg == 'works'){
        for ( var i=0; i<nav_leng; i++ ){
            $('.'+pg+'_wrapper .content_section').append(renderTpl('#tpl_Works'+(i+1)));
        }
    }

}

function drawRat(){
    setTimeout(function(){
        $('.contact_box .rat').animate({
            'opacity' : '1',
            'right' : '100%'
        }, 12000);
    }, 3000);
}

function drawFoot(){
    $('.contact_box .foot img').css('opacity', '0');
    setTimeout(function(){
            $('.contact_box .foot img').eq(0).animate({
                'opacity' : '1'
            }, 2000);
        }, 13000);
    setTimeout(function(){
            $('.contact_box .foot img').eq(1).animate({
                'opacity' : '1'
            }, 2000);
        }, 15000);
    setTimeout(function(){
            $('.contact_box .foot img').eq(2).animate({
                'opacity' : '1'
            }, 2000);
        }, 17000);
}
