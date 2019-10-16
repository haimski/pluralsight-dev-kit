// es6
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.dev.config';

/* eslint-disable no-console */

const port = 1234;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', function(req, res){
  // Hard coding for simplicity. pretend this is a real data base
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email": "bob@gmail.com"},
    {"id": 1, "firstName":"koosh", "lastName":"koosh", "email": "koosh@gmail.com"},
    {"id": 1, "firstName":"vouz", "lastName":"vouz", "email": "vouz@gmail.com"}
  ])
});

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
