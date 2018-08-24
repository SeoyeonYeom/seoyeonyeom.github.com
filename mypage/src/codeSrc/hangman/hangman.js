var word = ["monkey", "javascript", "school", "computer", "water", "icecream", "yellow", "github", "chicken", "theater", "fish", "strange", "red", "code", "interesting", "amazing"];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var select = 0;

var wordLeft = [];
var fail;
var main;
var result;

function gId(a) {
  return document.getElementById(a);
}


//문서가 불러와지면 키보드 생성
window.onload = function() {
    createKeyboard();
};

//게임 start 페이지로 넘어가면 메인 페이지+결과 페이지는 hidden,
//new game 함수 실행
function startGame() {
  main = document.querySelector(".main");
  result = document.querySelector(".result");
  main.classList.add("hidden");
  result.classList.add("hidden");
  newGame();
}

//이전 키보드와 플레이어 기록을 clear하고 새로운 word 생성
function newGame() {
  clearKeyboard();
  clearHistory();
  createWord();
}

function clearKeyboard() {
  var e = document.querySelector(".b");
  //본문에서 클래스 b 들을 찾아 배열로 묶고 데이터를 전부 없애줌
  for( var a = 0; a < e.length; a++ ) {
    e[a].setAttribute("data", "");
  }
}

//틀렸을때 나타나는 gN들의 data 값을 전부 false로 리셋
function clearHistory() {
  fail = 0;
  wordLeft = [];
  gId("g0").setAttribute("data", "false");
  gId("g1").setAttribute("data", "false");
  gId("g2").setAttribute("data", "false");
  gId("g3").setAttribute("data", "false");
  gId("g4").setAttribute("data", "false");
  gId("g5").setAttribute("data", "false");
  gId("g5").setAttribute("data-2", "false");
  gId("g5").setAttribute("data-3", "false");
  gId("g6").setAttribute("data", "false");
  gId("g6").setAttribute("data-2", "false");

}

//정답이 되는 word를 select
function createWord() {
    var d = document.querySelector(".answer");
    d.innerHTML = "";
    select = Math.floor(Math.random() * word.length);
    //후보로 정해놓은 단어들 중에서 랜덤으로 정수를 뽑음
    for( var a = 0; a < word[select].length; a++ ) {
    // 뽑힌 단어의 철자들을 a 값에 담음
    // word[select].length = 뽑힌 단어의 글자수
      var x = word[select][a].toUpperCase();
      // word[select][a] = 뽑힌 단어의 a-1번째 철자를 대문자로 변환
      var b = document.createElement("span");
        b.className = "letter" + (x == " " ? " ls" : "");
        b.innerHTML = "&nbsp";
        b.id = "letter" + a;
        d.appendChild(b);
      //글자수만큼 공백 공간 생성

      if(x != " ") {
        if(wordLeft.indexOf(x) == -1) {
          wordLeft.push(x);
        } //wordLeft에 x가 없으면 추가하기
      }
    }
  }

//알파벳 키보드를 생성해서 키보드 div 안에 붙여주기
function createKeyboard() {
  var tas = document.querySelector(".keyboard");
  tas.innerHTML = "";
  for( var a = 0; a < alphabet.length; a++ ) {
    var b = document.createElement("span");
    b.className = "b";
    b.innerText = alphabet[a];
    b.setAttribute("data", "");
    b.onclick = function() {
      bTas(this);
    };
    tas.appendChild(b);
  }
}

function bTas(a) {
  if(a.getAttribute("data") == "") {
    var x = isExist(a.innerText);
    a.setAttribute("data", x);
    if(x) {
      if(wordLeft.length == 0) { //wordLeft에 남은 글자가 없으면 게임 over
        gameEnd(true);
      }
    }
    else {
      failCycle();
    }
  }
}

// wordLeft 안에 글자가 있는지 구분하는 함수
function isExist(e) {
  var x = wordLeft.indexOf(e);
  if(x != -1) { //배열에 e가 있으면
    wordLeft.splice(x, 1); //배열에서 x번째부터 1개 제거
    typeWord(e);
    return true;
    }
  return false;
}

function failCycle() {
  fail++;
  switch(fail) {
    case (fail = 1) :
        gId("g0").setAttribute("data", "true");
        break;

    case (fail = 2) :
        gId("g1").setAttribute("data", "true");
        break;

    case (fail = 3) :
        gId("g2").setAttribute("data", "true");
        break;

    case (fail = 4) :
        gId("g3").setAttribute("data", "true");
        break;

    case (fail = 5) :
        gId("g4").setAttribute("data", "true");
        break;

    case (fail = 6) :
        gId("g5").setAttribute("data", "true");
        break;

    case (fail = 7) :
        gId("g5").setAttribute("data-2", "true");
        break;

    case (fail = 8) :
        gId("g5").setAttribute("data-3", "true");
        break;

    case (fail = 9) :
        gId("g6").setAttribute("data", "true");
        break;

    case (fail = 10) :
        gId("g6").setAttribute("data-2", "true");
        gameEnd(false);
        break;
      }
}

function typeWord(e) {
  for ( var a = 0; a < word[select].length; a++ ) {
    if(word[select][a].toUpperCase() == e) {
      gId("letter" + a).innerText = e;
      //만약 선택된 word의 a-1번째 글자가 e와 같다면
      //본문 letter에 e 글자를 삽입
    }
  }
}

function gameEnd(e) {
    var d = document.querySelector(".result");
    d.setAttribute("data", e);
    if(e) {
      gId("win").innerText = "You Win";
      gId("message").innerHTML = "천잰데?ㅋㅋㅋㅋㅋㅋ";
    }
    else {
      gId("win").innerText = "You Lose!"
      gId("message").innerHTML = "정답은 <br/><br/>\"" + word[select].toUpperCase() + "\"<br/><br/>다음에 또 도전하세요!";
    }
    d.classList.remove('hidden');
}
