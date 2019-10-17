// es6
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'; // gzip

/* eslint-disable no-console */

const port = 1234;
const app = express();

app.use(compression());
app.use(express.static('dist'));  // configure atatic html from dist

app.get('/users', function(req, res){
  // Hard coding for simplicity. pretend this is a real data base
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email": "bob@gmail.com"},
    {"id": 1, "firstName":"koosh", "lastName":"koosh", "email": "koosh@gmail.com"},
    {"id": 1, "firstName":"vouz", "lastName":"vouz", "email": "vouz@gmail.com"}
  ])
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
