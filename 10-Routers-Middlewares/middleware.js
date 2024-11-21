"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

// Middleware:
app.get('/', (req, res, next) => {

    console.log('Middleware started.')

    next()

    // next'den sonra kod yazmak hataya sebep olabilir.
    // res.send({
    //     message: 'Middleware Out'
    // })

})

// Route-Path:
app.get('/', (req, res) => {

    console.log('Route started.')

    res.send({
        message: 'Welcome'
    })

})

/* ------------------------------------------------------- *

// Middleware:
app.get('/', (req, res, next) => {

    if (req.query.username == 'clarusway') {

        //? req veya res ile data taşıma:
        // next() ile req ve res, bir sonraki route'a aktarılır.
        req.username = 'clarusway'
        res.message = 'Username is clarusway'

        next() // Doğruysa bir sonraki route'e geç.

    } else {

        res.send({
            message: 'Error: Username is wrong.'
        })

    }

})

app.get('/', (req, res) => {

    res.send({
        username: req.username,
        // message: 'Username is true.'
        message: res.message
    })

})

/* ------------------------------------------------------- */

app.get('/', (req, res, next) => {

    req.message1 = 'middleware-1 started'
    next()
    
})
app.get('/', (req, res, next) => {

    req.message2 = 'middleware-2 started'
    next()
    
})
app.get('/', (req, res, next) => {

    req.message3 = 'middleware-3 started'
    next()
    
})
app.get('/', (req, res, next) => {

    req.message4 = 'middleware-4 started'
    next()
    
})
app.get('/', (req, res, next) => {

    req.message5 = 'middleware-5 started'
    next()
    
})
app.get('/', (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4,
        message5: req.message5,
    })
    next()
    
})



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));