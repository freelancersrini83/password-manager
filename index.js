var express = require('express');
var ms      = require('mongoose');
var config  = require('./config/database');
const path  = require('path');

var app     = express();
var port    = process.env.port || 2447;
console.log(config.uri);
ms.connect(config.uri,(err)=>{
    if(err)
    {
        console.log("Error connecting to database: " + config.db+ ", more details:" + err);
    }
    else
    {
        console.log("Successfully connected to database");
    }
});

app.use(express.static(__dirname+ '/client/dist/'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(port, ()=>{
    console.log('Started server on port:' + port);
});