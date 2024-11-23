"use strict";
const express = require("express");
// const app = express();
const router = express.Router();
// app.use(router);
router.get("/",(req,res)=>{
res.json([ {
    id: 1,
    name: "Alex",
    },
    {
    id: 2,
    name: "Steve",
    }])

})

module.exports=router