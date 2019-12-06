var express = require('express');
const bodyParser = require('body-parser')
var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/view');
app.use(bodyParser.urlencoded({ extended: true }))
module.exports=app; 