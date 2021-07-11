const fileSystem=require ("fs/promises");
// create a file
// fileSystem.writeFile("first.txt","hello world!!!1");

//delete a file

//fileSystem.unlink("first.txt");

//create server
const http=require("http");
http.createServer((request,response)=>{
    //request for headers 
    console.log(request.headers);
    response.end("hello!!")
}).listen(3000)
//testing