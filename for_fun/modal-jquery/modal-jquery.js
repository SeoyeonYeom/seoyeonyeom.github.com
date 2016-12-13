(function(global, $){
  'use strict';


var $body = $('body');
var $dim = $('.dim');
var $modal = $('.modal');
var $modal_close_btn = $('.modal-close-button');

$dim.css({
  'position': 'fixed',
  'top': '0',
  'left': '0',
  'right': '0',
  'bottom': '0',
  'background': 'rgba(18,13,32,0.4)',
  'z-index': '100'
});

var removeDimModal = function() {
  $dim.hide();
  $modal.hide();
};

$modal_close_btn.on('click', removeDimModal);
$dim.on('click', removeDimModal);


})(this, this.jQuery);
