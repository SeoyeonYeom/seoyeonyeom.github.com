
document.onload = init();

function init(){
  start();
}

function start(){

  var today = new Date();
  var t_day = today.getDate();
  var t_month = today.getMonth()+1;
  var t_year = today.getFullYear();
  var th = today.getHours();
  var tm = today.getMinutes();
  var ts = today.getSeconds();
  th = correctTime(th);
  tm = correctTime(tm);
  ts = correctTime(ts);

  var t_date = t_year + '년' + ' ' + t_month + '월' + ' ' + t_day + '일';
  var t_hour = th + ':' + tm + ':' + ts;
  document.getElementById('clock').innerHTML = t_date + '<br>' + t_hour;

  var t = setInterval(start, 1000);
}

function correctTime(i) {
  if (i<10) {
    i = '0' + i;
  }
  return i;
}
