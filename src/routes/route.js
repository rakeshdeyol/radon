const express = require('express');
//const logger = require('./logger');


const router = express.Router();

router.get('/test-me', function (req, res) {
    
    //console.log('the constant in logger route has a value' +logger.url);
    res.send('My first ever api!')

});

router.get('/test-me1', function (req, res) {
    res.send('My first1 ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My fourth ever api!')
});

module.exports = router;
// adding this comment for no reason