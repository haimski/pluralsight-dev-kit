const express = require('express');
const path = require('path');
const open = require('open');

const port = 1234;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
