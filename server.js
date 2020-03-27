
var express=require("express");
var bodyParser=require("body-parser");
const path= require('path');
const route = require('./route');
var app=express();
var cors = require('cors');
app.use(cors());

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static(path.join(__dirname+'/dist/developerOne')));

app.use('/api', route);

// app.get('/*',function(request,response){
// response.sendfile(path.join(__dirname+'/dist/developerOne/index.html'));
// });

var server=app.listen(process.env.PORT||8090,function(){
console.log("Server started @ http://%s:%s",server.address().address,server.address().port);
});
