// server.js
// load the things we need
const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');

const db = require('./db')
// set the view engine to ejs
app.set('views', path.join(__dirname, 'Presentacion'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
const arbolRoutes = require('./Routes/arbol');
// use res.render to load up an ejs view file

// index page 
app.use('/', arbolRoutes);

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(3000);
console.log('3000 is the magic port');