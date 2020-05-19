var express =require('express');
var app=express();

var file=require('fs')

var bodyparser=require('body-parser')

var server = app.listen(8001,function(){
  var host=server.address().address
  var port =server.address().port
  console.log("Example app listening at http://%s:%s",host,port)
});

//get
app.get('/whoiam/:name',function(reg,res){
   var name=reg.params.name;
   var output;
   console.log(name);
   if(name=='Padma')
     output=name+" is NEC student";
   else
    output=name+" is not NEC student";
   res.end(JSON.stringify(output));
});

//get
app.get('/student',function(req,res){
   const student=file.readFileSync('Student.json')
   const studentobj=JSON.parse(student)
   res.end(JSON.stringify(studentobj))
});


//post
app.post('/add',function(req,res){
  const reqdata=req.body
  console.log("got the student from request",reqdata)
  res.end(JSON.stringify("student data has been updated"))
});