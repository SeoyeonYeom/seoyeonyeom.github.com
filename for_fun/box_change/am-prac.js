
// darkred를 onclick 하면
// lightred 자리에 darkred를 대체시킨다.
// darkred의 sibling 앞에 lightred를 삽입한다.

var row = document.querySelector('.row');
var row_2 = document.querySelector('.row-2');

var dark_box_list = row.querySelectorAll('a');
var light_box_list = row_2.querySelectorAll('a');
var change_btn = document.querySelector('.change-btn');

for( var i=0, l=dark_box_list.length; i<l; i++ ) {
  var select_box = dark_box_list[i];
  var matching_box = light_box_list[i];
  select_box.onclick = makeBorder;
  matching_box.onclick = makeBorder;
}


//박스를 클릭하면 border 효과 설정
//양쪽에서 한개씩 박스를 선택하면, change 버튼이 활성화
function makeBorder() {
  if (this.classList.contains('clicked-border')) {
    this.classList.remove('clicked-border');
    this.style.border = 0;
  }
  else {
    this.classList.add('clicked-border');
    this.style.border = "2px solid #000";
    if (row.getElementsByClassName('clicked-border').length === 1) {
      if (row_2.getElementsByClassName('clicked-border').length === 1) {
        change_btn.removeAttribute("disabled");
        }
      else if(row_2.getElementsByClassName('clicked-border').length !== 1) {
          change_btn.setAttribute("disabled",true);
      }
    } else {
      change_btn.setAttribute("disabled", true);
    }
  }
}


//선택한 dark 박스의 nextElementSibling을 찾는다.
//current_2_box를 nextElementSibling 앞에 삽입한다.
change_btn.onclick = changePosition;
function changePosition() {
    var current_box = row.querySelector('.clicked-border');
    var current_box_nextSibling = current_box.nextElementSibling;
    current_box.style.border = 0;
    var clone_current = current_box.cloneNode(true);
    clone_current.style.border = "2px solid #000";
    var current_2_box = row_2.querySelector('.clicked-border');
    var current_2_box_nextSibling = current_2_box.nextElementSibling;
    var dark_go = current_2_box.parentNode.insertBefore(clone_current, current_2_box_nextSibling);
    var replace_el = current_box.parentNode.replaceChild(current_2_box, current_box);

  return dark_go, replace_el;
}
