
$(function(){
    drawRat();
    drawFoot();
});

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
