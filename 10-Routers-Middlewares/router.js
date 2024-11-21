"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? "Router" is special app for URL control in ExpressJS.

// app.get('/welcome', function(req, res) {
//     res.send({
//         message: 'Welcome'
//     })
// })

//* express.Router()
const router = express.Router()

// router.get('/', (req, res) => { res.send({ message: 'Welcome' }) })
// router.post('/', (req, res) => { res.send({ message: 'Post' }) })
// router.put('/', (req, res) => { res.send({ message: 'Put' }) })
// router.delete('/', (req, res) => { res.send({ message: 'Delete' }) })

// router.all('/', (req, res) => { res.send({ message: 'All' }) })

router.route('/')
    .get((req, res) => { res.send({ message: 'Get' }) })
    .post((req, res) => { res.send({ message: 'Post' }) })
    .put((req, res) => { res.send({ message: 'Put' }) })
    .delete((req, res) => { res.send({ message: 'Delete' }) })


//? app'e router kullanıdığımı bildirmem gerekiyor. (app'e router'ı aktar.)
app.use(router)


/* ------------------------------------------------------- */

//? Router ayarlarını /routes/index.js dosyasından al:
// const router = require('./routes/index.js')
// const router = require('./routes/index')
// const router = require('./routes/') // default dosya ismi her zaman index.js'dir
// app.use(router)

app.use(require('./routes/'))


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));