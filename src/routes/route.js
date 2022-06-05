const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
//const lodash = require('lodash');
const myLogger = require('./logger');
const { send } = require('express/lib/response');


const router = express.Router();



router.get('/movies', function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    return res.send({movies: movies})
});


router.get( '/movies/:indexNumber', function (req, res) {

    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   let num = req.params.indexNumber;
    return res.send({movies: movies[num]})
});

router.get( '/movies/:indexNumber', function (req, res) {

    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   let num = req.params.indexNumber;
   for(let i=0;i<movies.length;i++){
    if(movies[i]>movies[num]){
        console.log('movies :'+movies[num]);
        break;
    }else{
        console.log('Please enter the valid IndexNumber');
        break;
    }
 
 }

     res.send('done')
    
});

router.get('/films1', function (req, res) {
    const movie=
        [ {
            id: 1,
            name: 'The Shining'
        },
        {
            id: 2,
            name: 'Incendies'
       },
        {
            id: 3,
            name: 'Rang de Basanti'
       },
        {
            id: 4,
            name : 'Finding Nemo'
       }]

       
         res.send(movie)
       
});




        let filmsArray = [ {
            'id': 1,
            'name': 'The Shining'}, 
            {
            'id': 2,
            'name': 'Incendies'}, 
            {
            'id': 3,
            'name': 'Rang de Basanti'}, 
            {
            'id': 4,
            'name': 'Finding Nemo'}
        ]
        
        router.get('/films/:filmId', function(req,res){
            let filmIndex = req.params.filmId;
            let index,film;
            for(index=0;index<filmsArray.length;index++){
                if(filmsArray[index].id==filmIndex){
                    film = (filmsArray[index].name);
                }
            }
            if(filmIndex >= filmsArray.length){
                film = ("index does not exists");
            }
            res.send(film);
        })
       
module.exports = router;
// adding this comment for no reason