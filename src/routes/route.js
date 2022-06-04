const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
//const lodash = require('lodash');
const myLogger = require('./logger')


const router = express.Router();


router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    myLogger.chunk();
    myLogger.tail();
    myLogger.union();
    myLogger.fromPairs();
    
   res.send('Hello there!')
});

router.get('/hello1', function (req, res) {
   
    res.send('Hello there!')
});

//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
router.get('/sol1', function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]+1 != arr[i+1]){
            missingNumber= arr[i]+1;

        }
        
    }

    ///LOGIC WILL GO HERE 
    res.send({ data: missingNumber  })


});



//Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        let arr= [33, 34, 35, 37, 38]
        let missingNumber1

        for(let i=0;i<arr.length-1;i++){
            if(arr[i]+1 != arr[i+1]){
                missingNumber1= arr[i]+1;
    
            }
            
        }

        ///LOGIC WILL GO HERE 

        res.send(  { data: missingNumber1  }  );
});



router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason