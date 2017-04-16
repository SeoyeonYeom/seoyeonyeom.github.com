(function(global){

var shown_message = [];
shown_message.push("My turn.");
shown_message.push("Glad to meet you.");
shown_message.push("How's today?");
shown_message.push("Did you study hard?");
shown_message.push("Good.");
shown_message.push("Good luck guys!");

var ironman = document.querySelector('.ironman');
var ironman_message = ironman.querySelector('.message');
var ironman_button = ironman.querySelector('.ironman-print-button');
var ironman_message_count = 0;


var ironman_voice_1 = document.createElement('audio');
ironman_voice_1.setAttribute('src', 'media/myturn.mp3');
var ironman_voice_2 = document.createElement('audio');
ironman_voice_2.setAttribute('src', 'media/home.mp3');
var ironman_voice_3 = document.createElement('audio');
ironman_voice_3.setAttribute('src', 'media/fly.mp3');
var ironman_voice_4 = document.createElement('audio');
ironman_voice_4.setAttribute('src', 'media/breach.mp3');
var ironman_voice_5 = document.createElement('audio');
ironman_voice_5.setAttribute('src', 'media/wantone.mp3');
var ironman_voice_6 = document.createElement('audio');
ironman_voice_6.setAttribute('src', 'media/beat.mp3');

var played_voice = [];
played_voice.push(ironman_voice_1);
played_voice.push(ironman_voice_2);
played_voice.push(ironman_voice_3);
played_voice.push(ironman_voice_4);
played_voice.push(ironman_voice_5);
played_voice.push(ironman_voice_6);

var ironman_voice_count = 0;

ironman_button.onclick = function() {
  var print_message = shown_message[ ironman_message_count++ % shown_message.length ];
  ironman_message.textContent = print_message;
  var saying_voice = played_voice[ ironman_voice_count++ % played_voice.length ];
  saying_voice.play();
};


})(this);
