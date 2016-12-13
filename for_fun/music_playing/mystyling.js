
// 모든 이벤트에 click으로 통일 (move, play, stop, close)

var $demo_container = $('.demo-container');
var $album = $('.album');
var $album_disk = $('.album-disk');

var bg_music = new Audio ();
bg_music.src = 'Eton-Messy-Presents.mp3';

$demo_container.css( 'background', 'linear-gradient(#777, #000)');




function playMusic() {
  if (!$album_disk.hasClass('move')) {
    $album_disk.addClass('move');
  }
  else {
    if ($album_disk.hasClass('play') && $album_disk.hasClass('stop') && $album_disk.hasClass('close') ) {
      $album_disk.removeClass('move').removeClass('play').removeClass('stop').removeClass('close');
    }
    else if ($album_disk.hasClass('stop') && !$album_disk.hasClass('close')) {
      $album_disk.addClass('close');
      bg_music.pause();
      }
    else if ($album_disk.hasClass('play') && !$album_disk.hasClass('stop')) {
      $album_disk.addClass('stop');
    }
    else {
      $album_disk.addClass('play');
      bg_music.play();
    }
  }
}

$album.on('click', playMusic);






// var clicked_status = false;
//
// // function moveDisk() {
// //   clicked_status = true;
// //   $album_disk.addClass('move');
// // }
// //
// // function playDisk() {
// //   if ($album_disk.hasClass('move')) {
// //     $album_disk.addClass('play'); }
// // }
// //
// // function stopDisk() {
// //   if ($album_disk.hasClass('play'))
// //     $album_disk.addClass('stop');
// // }
