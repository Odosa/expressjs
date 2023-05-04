

const express = require('express');
const path = require('path');
// Init App
const app = express();

// Load view Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  res.render('index', {
    title: "Express.js"
  })
})


// Start Server
app.listen(4000, function(){
  console.log('server started on port 4000...')
})

// About Route
app.get('/contact', function(req, res){
  res.render('contact');
})

app.get('/services', function(req, res){
  res.render('services');
})



