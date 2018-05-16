window.onload = function(){
  var btn = document.getElementById('btn-danger');
  btn.addEventListener("click", handler);
}

function handler(){

  var accepted = confirm("행사를 등록하시겠습니까?")
  if(accepted){
    sendAjax('http://117.17.102.69:3000/ajax_send');
  }
}

function sendAjax(url){

  var data = {};
  data.name = document.getElementById("name").value;
  data.sponsor = document.getElementById("sponsor").value;
  data.start_date = document.getElementById("start_date").value;
  data.end_date = document.getElementById("end_date").value;
  data.time = document.getElementById("time").value;
  data.addr = document.getElementById("addr").value;
  data.intro = document.getElementById("intro").value;

  console.log(data);
  data = JSON.stringify(data);

  var oReq = new XMLHttpRequest();

        oReq.onload = function(e){
          if (oReq.readyState === 4) {
            if (oReq.status === 200) {
              console.log(oReq.responseText);
              alert("행사가 등록되었습니다.");
              document.location.href="./index.html";
            } else {
              console.error(oReq.statusText);
            }
          }

        }
        oReq.open('POST', url, true);
        oReq.setRequestHeader('Content-Type', "application/json")// json 형태로 보낸다
        oReq.send(data);
}
