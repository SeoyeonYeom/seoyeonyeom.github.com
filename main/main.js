(function(global){
  'use strict';


  function followScroll(){
    var spider = document.querySelector('.spider');
    var my_height = this.scrollY;
    var height_ratio = my_height / 10;
    console.log(height_ratio);

    var spider_height = spider.style.top;
    spider_height = height_ratio + '%';
    spider.style.top = spider_height;
  }

  function init() {
    window.onscroll = followScroll;
  }

  window.onload = init;



  function scrollAnimation(){

    var body = document.querySelector('body');
    var nav = document.querySelector('.navigation');
    var links = nav.querySelectorAll('a');
    var nav_height = window.parseInt(nav.style.height, 10);

    for ( var i=1; i<3; i++ ){
      var link = links[i];
      var id_name = this.getAttribute('href');
      var section = document.querySelector(id_name);

      body.animate.scrollTop = section.offset().top - nav_height;

    }
  }


})(this);
