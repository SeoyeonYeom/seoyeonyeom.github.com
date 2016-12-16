(function(global){
  'use strict';


  function followScroll(){
    var spider = document.querySelector('.spider');
    var my_height = this.scrollY;
    var height_ratio = my_height / 12;
    console.log(height_ratio);

    var spider_height = spider.style.top;
    spider_height = height_ratio + '%';
    spider.style.top = spider_height;

  }

  function init() {
    window.onscroll = followScroll;
  }

  window.onload = init;

})(this);
