(function(global) {
	'use strict';

var gallery = document.querySelector('.image-gallery');
var buttons = gallery.querySelectorAll('button');
var gallery_view = gallery.querySelector('.gallery-view');


function showPictures() {
	var img = this.querySelector('img');
	var src = img.getAttribute('src');
	var alt = img.getAttribute('alt');
	var current_big_img = gallery_view.querySelector('img');

	var big_src = src.replace('thumbs', 'big');
	var big_alt = alt.replace('thumbs', 'big');
	current_big_img.setAttribute('src', big_src);

}

for ( var i=0, l=buttons.length; i<l; i++ ) {
	var button = buttons[i];
	button.onclick = showPictures;
}




})(this);