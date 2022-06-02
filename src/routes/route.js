const express = require('express');

const externalModule = require('../logger/logger')
const helperModule = require("../util/helper.js")
const formatterModule = require("../validator/formatter.js")

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('The constant in logger route has a value '+externalModule.endpoint)
//     console.log('The current batch is '+externalModule.batch)
//     externalModule.log()
//     res.send('My first ever api!')
// });

router.get('/test-me', function (req, res) {
    externalModule.log()
    console.log("todays date (dd/mm) - " +helperModule.dd() + "/" +helperModule.mm())
    helperModule.batchInfo()
    console.log(`i apply trim - ${formatterModule.trim}`)
    formatterModule.lower()
    formatterModule.upper()
    res.send('My first ever api!')
});

module.exports= router ;