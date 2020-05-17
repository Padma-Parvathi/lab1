var express =require('express');
var app=express();
var server = app.listen(9101,function(){
  var host=server.address().address
  var port =server.address().port
  console.log("Example app listening at http://%s:%s",host,port)
})
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
})