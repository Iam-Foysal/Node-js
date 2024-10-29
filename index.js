const http = require('http')

let port = 6006;

let myserver = http.createServer((req, res)=>{

    console.log("my server is running")
    res.end("My Name is foysal")
})

myserver.listen(port)