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

const app= http.createServer((req, res)=>{
    

    res.end('<h1> hello FS </h1>' )

}).listen(PORT,()=> console.log(`Server Runned http://${HOST}:${PORT}`))