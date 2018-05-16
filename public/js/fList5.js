var url = 'http://117.17.102.69:3000/json';

var event_ex = document.getElementById('event_ex');

var str = '';

function list_events(text){
  var data = JSON.parse(text);

      str += '<div class="img_con"></div>'
      str += '<div class="explain"><table class="table table-bordered"><tr><td id="td_color">행사명</td><td>'+data[5].name+'</td></tr>'
      str += '<tr><td id="td_color">주최자</td><td class="td_info">'+data[5].sponsor+'</td></tr>'
      str += '<tr><td id="td_color">날짜</td><td class="td_info">'+data[5].start_date+' - '+data[5].end_date+'</td></tr>'
      str += '<tr><td id="td_color">시간</td><td class="td_info">'+data[5].time+'</td></tr>'
      str += '<tr><td id="td_color">장소</td><td class="td_info">'+data[5].addr+'</td></tr>'
      str += '<tr><td id="td_color">설명</td><td class="td_info">'+data[5].intro+'</td></tr></table></div>'

  event_ex.innerHTML = str;
}

function AsyncGet(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if(xhr.status == 200){
      callback(xhr.responseText)
    }
  }
  xhr.send();
}

AsyncGet(url, list_events);
