const express = require('express');
<<<<<<< Updated upstream

const externalModule = require('../logger/logger')
const helperModule = require("../util/helper.js")
const formatterModule = require("../validator/formatter.js")
=======
const externalModule = require('./logger')
>>>>>>> Stashed changes

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('The constant in logger route has a value '+externalModule.endpoint)
//     console.log('The current batch is '+externalModule.batch)
//     externalModule.log()
//     res.send('My first ever api!')
// });

router.get('/test-me', function (req, res) {
<<<<<<< Updated upstream
    externalModule.log()
    console.log("todays date (dd/mm) - " +helperModule.dd() + "/" +helperModule.mm())
    helperModule.batchInfo()
    console.log(`i apply trim - ${formatterModule.trim}`)
    formatterModule.lower()
    formatterModule.upper()
    res.send('My first ever api!')
});

module.exports= router ;
=======
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason
>>>>>>> Stashed changes
