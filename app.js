var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host : '127.0.0.1',
  port : '3306',
  user : 'root',
  password : 'dbrtmxhsl',
  database: 'api'
})

connection.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Start server on port 3000");
  console.log('http://117.17.102.69:3000/naverlogin app listening on port 3000!');
})

console.log("End of code");


app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html');
});

app.post('/ajax_send', function(req,res){
  var body = req.body;

  console.log("name :", req.body.name);
  console.log("sponsor :", req.body.sponsor);
  console.log("start_date :", req.body.start_date);
  console.log("end_date :", req.body.end_date);
  console.log("time :", req.body.time);
  console.log("addr :", req.body.addr);
  console.log("intro :", req.body.intro);

  var responseData = {
    'result' : 'ok',
    'name' : req.body.name,
    'sponsor' : req.body.sponsor,
    'start_date' : req.body.start_date,
    'end_date':req.body.end_date,
    'time' :req.body.time,
    'addr' : req.body.addr,
    'intro' : req.body.intro};

  connection.query("INSERT INTO festival (name, sponsor, start_date, end_date, time, addr, intro) VALUES (?, ?, ?, ?, ?, ?, ?)", [
      body.name, body.sponsor, body.start_date, body.end_date, body.time, body.addr, body.intro
    ], function(err, result){
      if(err) {
        responseData.result = "fail";
        res.json(200,responseData);
      }
      else{
        console.log(result);
        res.json(200,responseData);
      }
  });

});

app.get('/json', function(req, res){
  connection.query("SELECT id,name,sponsor,start_date,end_date,time,addr,intro FROM festival WHERE permission=true and unix_timestamp(end_date) >= unix_timestamp(now())", function(err, result, fields){
    if(err){
      console.log("[Querying error]", err);
      res.json(500, false);
    } else {
      console.log("success");
      res.json(200,result);
    }
  });
});
