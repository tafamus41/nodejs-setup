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

/* ------------------------------------------------------- *
//? Multiple Middlewares:

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
    // res.send({
    //     message1: req.message1,
    //     message2: req.message2,
    //     message3: req.message3,
    //     message4: req.message4,
    //     message5: req.message5,
    //     message: 'Middleware-4 output'
    // })
    
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
        message: 'Finished'
    })
    
})

/* ------------------------------------------------------- *

const middleFunc1 = (req, res, next) => {

    console.log('middleFunc1 run.')
    req.message1 = 'middleFunc1 run.'
    // next()
    next('route') // Bir sonraki path-route'a geç (bir tane atla)

}

const middleFunc2 = (req, res, next) => {

    console.log('middleFunc2 run.')
    req.message2 = 'middleFunc2 run.'
    next()

}

// Use Middlewares:
// app.use('/home', middleFunc1)
// app.use(middleFunc1) // URL yazılmazsa tümü için geçerli olur.
// app.use(middleFunc2)

// Alternative
// app.use(middleFunc1, middleFunc2)

// Alternative
// app.use([middleFunc2, middleFunc1]) // all method (recommended)
// app.get('/home', [middleFunc2, middleFunc1]) // get method (url must be)

app.get('/home', [middleFunc1, middleFunc2], (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message: 'Finished'
    })
    
})

app.get('/home', (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message: 'next.Route - Finished'
    })
    
})

/* ------------------------------------------------------- */

// const middleFuncs = require('./middlewares/')
// app.use(middleFuncs)

// const [ middleFunc1, middleFunc2 ] = require('./middlewares/')
const { middleFunc1, middleFunc2 } = require('./middlewares/')
// app.use(middleFunc1, middleFunc2)

app.get('/', middleFunc1, middleFunc2, (req, res) => {

    res.send({
        message1: req.message1,
        message2: req.message2,
        message: 'Finished'
    })
    
})


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));