'use strict'
// console.log('nodejs server');

const http=require('node:http')

// http.createServer((request,response)=>{


// } )
// server oluştur
/*
http.createServer((req, res)=>{
    console.log('server dasın');

    res.end('hello FS' )
})
*/
// gelen istekleri dinlemeye başla
/*
const app= http.createServer((req, res)=>{
    console.log('server dasın');

    res.end('<h1> hello FS </h1>' )
})
app.listen(8000,'127.0.0.1')
*/
/*
const app= http.createServer((req, res)=>{

    res.end('<h1> hello FS </h1>' )
    // console.log('server dasın');

}).listen(8000,'127.0.0.1',()=> console.log('Server Runned http://127.0.0.1:8000'))
*/
require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1' 
/*
const app= http.createServer((req, res)=>{
    // console.log(req);

    if(req.url=='/')
        if(req.method=='GET')

            res.end('<h1> Home page</h1>' )
        else
            res.end('<h1> You can not POST</h1>' )

    else if(req.url=='/user')
        res.end('<h1> User page</h1>' )
    else
        res.end('<h1> Undefined url</h1>' )

}).listen(PORT,()=> console.log(`Server Runned http://${HOST}:${PORT}`))
*/
/*
const app= http.createServer((req, res)=>{
    if(req.url=='/' && req.method=='GET'){
        res.write('message 1 ')
        res.write('message 2 ')
        res.write('message 3 ')
    }
    else if(req.method=='POST'){
        // res.write('method POST')
        // res.statusCode=201
        // res.statusMessage='Tamam'
        res.writeHead(201,"tamam")
        res.write('method POST')
    }
        res.end()
    
}).listen(PORT,()=> console.log(`Server Runned http://${HOST}:${PORT}`))
*/
const app= http.createServer((req, res)=>{
    
    const obj={
        chort:'FS',
        message: 'Hello'

    }
    res.end(JSON.stringify(obj))
    
}).listen(PORT,()=> console.log(`Server Runned http://${HOST}:${PORT}`))