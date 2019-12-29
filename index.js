var express = require('express');
var app = express();
var path = require('path');
// app.get('/',function(req,res) {
//     res.send(__dirname);
// });


app.use(express.static(path.join(__dirname,'build')));

app.listen(4000);