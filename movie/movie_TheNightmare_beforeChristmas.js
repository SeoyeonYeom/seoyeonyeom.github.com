//
// var container = document.querySelector('.container');
// var grid_btn = document.querySelector('.grid-btn');
//
// function toggleGrid() {
//   if(container.classList.contains('show-grid')) {
//     container.classList.romove('show-grid');
//   };
//   else{
//     container.classList.add('show-grid')
//   };
// };
//
// grid_btn.onclick = function toggleGrid();
//


var container = document.querySelector('.container');
var grid_btn_on = document.querySelector('.grid-btn-on');
// var grid_btn_off = document.querySelector('.grid-btn-off');
//
// grid_btn_on.onclick = function() {
//   var current_class = container.getAttribute('class');
//   container.setAttribute('class', current_class + ' ' + 'show-grid');
// };
//
// grid_btn_off.onclick = function() {
//   var current_class = container.getAttribute('class');
//   var removed_class = current_class.replace('show-grid', ' ');
//   container.setAttribute('class', removed_class);
// };

var pressed_text = 'Grid-Off Here';
var normal_text = 'Grid-On Here';
var is_pressed_btn = false;

function toggleGrid(){
  if(is_pressed_btn === true) {
    is_pressed_btn = false;
    container.classList.remove('show-grid');
    grid_btn_on.textContent = normal_text;
  }
  else {
    is_pressed_btn = true;
    container.classList.add('show-grid');
    grid_btn_on.textContent = pressed_text;
  }
};

grid_btn_on.onclick = toggleGrid;
