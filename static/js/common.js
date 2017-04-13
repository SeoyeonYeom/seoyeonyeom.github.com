
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
    // $('.body_wrapper').append(renderTpl('#tpl_Career', {}));
    // $('.body_wrapper').append(renderTpl('#tpl_Contact', {}));


    $('.navigation .sub_nav li').on('click', function(){
        var page_name = $(this).parents('li').attr('class').split('_')[1];
        drawContents(page_name);
    });

    $('.small_nav li').on('click', function(){
        $('.small_nav li.active').removeClass('active');
        $('.content_section > div').css('display', 'none');
        var name = $(this).attr('class')+'_container';
        $('div.'+name).css('display', 'block');
        $(this).addClass('active');
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
function drawContents(flag){
    $('.body_wrapper > div').css('display', 'none');
    if (flag == 'about') {
        $('.about_wrapper').css('display', 'block');
    } else if (flag == 'works') {
        $('.works_wrapper').css('display', 'block');
    } else if (flag == 'career') {
        $('.career_wrapper')
    } else if (flag == 'contact') {

    }
}
