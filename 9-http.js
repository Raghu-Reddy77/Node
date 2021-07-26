const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('hello welcome to java_quizs home page')
    }
    if(req.url==='/about'){
        res.end('hello welcome to java_quizs about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>your is not valid </p>
    <a href='/'>Back home</a>
    `)
})

server.listen(3000)