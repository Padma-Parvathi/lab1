const file =require('fs')//file lib

//jsonobject to string
const student={"Name":"Padma","Dep":"ECE","Sec":"A"};//jsonobject
const jsonstr=JSON.stringify(student)
console.log(jsonstr)

//string to object
const jsonstring='{"Name":"Padma","Dep":"ECE","Sec":"A"}';//string
const jsonobj=JSON.parse(jsonstring)
console.log(jsonobj)

//objectarray
const studentjsonarr=[{"Name":"Padma","Dep":"ECE","Sec":"A"},{"Name":"Preeti","Dep":"ECE","Sec":"b"}];
console.log(studentjsonarr);
console.log(JSON.stringify(studentjsonarr))

//write and read from file
file.writeFileSync('test.json',jsonstr)
const studentfromfile=file.readFileSync('Student.json')
console.log("Before converting data to string:",studentfromfile)

//converting data to string
const stfromfilestring=JSON.parse(studentfromfile)
console.log("converted json to string:",stfromfilestring)