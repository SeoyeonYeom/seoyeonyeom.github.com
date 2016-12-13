

$('.scroll-menu a').on('click', function(evt){
  evt.preventDefault();
  var body = $('body');
  var nav = $('.scroll-menu');
  var nav_width = window.parseInt(nav.css('width'),10);

  var id_name = this.getAttribute('href');
  var section = $(id_name);

  // window.scrollTo(section.offset().left - nav_width, 0);
  // window.secrollTo(X, Y)

  body.animate({
    'scrollLeft': section.offset().left - nav_width},
    4000 );
});






































// jQuery(function($) {
//   'use strict';

//
// var $doc = $('body');
// var $scroll_menu = $('.scroll-menu');
// var $btn = $('.scroll-menu a');
//
//
//
// $scroll_menu.on('click', function(event){
//   event.preventDefault;
//   var scroll_menu_height = window.parseInt($scroll_menu.css('height'), 10);
//   var target = this.getAttribute('href');
//
// });
//
//
//
// //   var $doc = $('html, body');
//   var $scroll_menu_ul = $('.scroll-menu ul');

//   $('.scroll-menu a').on('click', function(evt) {
//   	evt.preventDefault;
//     var scroll_menu_ul_height = window.parseInt( $scroll_menu_ul.css('height'),10);
//     var target_id             = this.getAttribute('href');
//     var $target               = $(target_id);

//     // 목적지로 바로 점핑
//   window.scrollTop($target.offset().top - scroll_menu_ul_height);

// 	// // 목적지로 수직 방향 스크롤 애니메이션
// 	// $doc.animate({
// 	// 	scrollTop: '$target.offset().top - scroll_menu_ul_height'
//  //  });

// };

// })(this, this.jQuery);
