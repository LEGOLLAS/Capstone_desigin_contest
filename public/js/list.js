var url = 'http://117.17.102.69:3000/json';

var list = document.getElementById('list');
var str = '';

function list_events(text){
  var data = JSON.parse(text);
  console.log("[Parsed]", data);

  for(i=0;i<data.length;i++){
    str += '<li id="li_set"><a href="fList'+i+'.html">'
    str += '<div id="control"></div>'
    str +='<div id="span_con"><span class="f_tit">'+data[i].name
    str +='</span></div></a></li>'
  }
  list.innerHTML = str;
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
