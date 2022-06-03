const express = require('express');


//const externalModule = require('../logger/logger')
//const helperModule = require("../util/helper.js")
//const formatterModule = require("../validator/formatter.js")
//const externalModule = require('./logger')

const mylogger = require('./logger')


const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('The constant in logger route has a value '+externalModule.endpoint)
//     console.log('The current batch is '+externalModule.batch)
//     externalModule.log()
//     res.send('My first ever api!')
// });

router.get('/hello', function (req, res) {
    mylogger.chunk();
    mylogger.tail();
    mylogger.union();
    mylogger.fromPairs();

    res.send('My first  api!')
    
});

module.exports= router ;

