
$(function(){
    $.views.settings.delimiters("<%", "%>");

    $('.navigation > ol > li').hover(function(){
        if ($('.navigation > ol > li .showed').length > 0) {
            $('.navigation > ol > li .showed').removeClass('showed');
        }
        $(this).find('.sub_nav').addClass('showed');
        $('body').on('click', function(e){
            if ($(e.target).hasClass('.showed')){
            } else {
                $('.navigation li .showed').removeClass('showed');
            }
        });
    });

    $('.body_wrapper').append(renderTpl('#tpl_About', {}));
    $('.body_wrapper').append(renderTpl('#tpl_Works', {}));
    $('.body_wrapper').append(renderTpl('#tpl_Career', {}));
    $('.body_wrapper').append(renderTpl('#tpl_Contact', {}));

    $('.navigation > ol > li > div').on('click', function(){
        var page = $(this).parent('li').attr('class').split('_')[1];
        drawPages(page);
        if ($(this).parent('li').children('ul.sub_nav').length > 0){
            drawContents($(this).parent('li').find('li').eq(0));
        }
    });

    $('.navigation .sub_nav li').on('click', function(){
        var page = $(this).parents('li').attr('class').split('_')[1];
        drawPages(page);
        drawContents($(this));
    });

    $('.body_wrapper button.btn_start').on('click', function(){
        $('.navigation .sub_nav li.about1').click();
    });

    $('.small_nav li').on('click', function(){
        drawContents($(this));
    });
});


// jsrender 함수 정의 //
function renderTpl(id, obj) {
	var tmpl = $.templates(id);
	var data = obj;
	var html = tmpl.render(data);
	return html;
}


// Big 페이지 그리는 함수 //
function drawPages(flag){
    $('.body_wrapper > div').css('display', 'none');
    $('.body_wrapper button.btn_start').css('display', 'none');
    $('.'+flag+'_wrapper').css('display', 'block');
}


// 세부 페이지 그리는 함수 //
function drawContents($this){
    $('li.active').removeClass('active');
    $('.content_section > div').css('display', 'none');
    var name = $this.attr('class');
    $('div.'+name+'_container').css('display', 'block');
    $('li.'+name).addClass('active');
}
