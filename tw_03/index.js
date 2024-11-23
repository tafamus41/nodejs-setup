require("dotenv").config()
const PORT=process.env.PORT
const HOST=process.env.HOST
// console.log(HOST)
// console.log(PORT)
const express=require("express")
// const abc=require("./routes/students")
const router=express.Router()
const app=express()
router.get("/ab?cd?", (req, res) => {
      res.send("<h1>path matched</h1");
       })

// app.get("/abcd/",(req,res)=>{
//     res.send("merhaba dünya")
    
// })

// router.get("/", (req, res) => {
//     res.send("<h1>path matched</h1");
//    })
 app.use(router)  
app.listen(PORT)
// app.use
// app.listen(/abcd/,()=>{
//     console.log("hello world")
// })