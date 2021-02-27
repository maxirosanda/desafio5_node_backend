var http = require('http')
var modulo= require('./modulo');
var server = http.createServer((request,response)=>{
    response.end(modulo.hacerObjeto())
    })

    server.listen(3000,function(){
        console.log(`tu servidor esta listo en ` + this.address().port)
    })