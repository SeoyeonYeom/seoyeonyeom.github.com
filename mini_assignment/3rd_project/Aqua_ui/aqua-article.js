
var body = document.querySelector('body');
var container = body.querySelector('.img-container');
var imgs = container.querySelectorAll('.picture');
var carousel = container.querySelector('.carousel');
var btns = carousel.querySelectorAll('a');



for ( var i=0, l=btns.length; i<l; i++ ){
  var btn = btns[i];
  btn.addEventListener("mouseover", makeHover);
  btn.addEventListener("mouseleave", clean);
}

function makeHover(){
  var name = this.getAttribute('class');
  container.querySelector('#'+name).classList.add('selected');
  this.classList.add('selected');
}

function clean(){
  this.classList.remove('selected');
  container.querySelector('.selected').classList.remove('selected');
}

for ( var a=0, L=imgs.length; a<L; a++ ){
  var img = imgs[a];
  img.addEventListener("mouseover", makeBtnHover);
  img.addEventListener("mouseleave", cleanBtn);
}

function makeBtnHover(){
  var name = this.getAttribute('id');
  carousel.querySelector('.'+name).classList.add('selected');
  this.classList.add('selected');
}

function cleanBtn(){
  this.classList.remove('selected');
  carousel.querySelector('.selected').classList.remove('selected');
}
