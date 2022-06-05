const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
//const lodash = require('lodash');
const myLogger = require('./logger');
const { send } = require('express/lib/response');


const router = express.Router();

// 1. Create an API for GET /movies that returns a list of movies.
// Define an array of movies in your code and return the value in response.


router.get('/movies', function (req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    return res.send({movies: movies})
});


// 2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1).
// You can define an array of movies again in your api
 // [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]

// /movies/2
 

router.get( '/movies/:indexNumber', function (req, res) {

    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   let num = req.params.indexNumber;
    return res.send({movies: movies[num]})
});

// 3. Handle a scenario in problem 2 where if the index is greater than the valid maximum value
 //a message is returned that tells the user to use a valid index in an error message.

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

/* 4. Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
[ {
 “id”: 1,
 “name”: “The Shining”
}, {
 “id”: 2,
 “name”: “Incendies”
}, {
 “id”: 3,
 “name”: “Rang de Basanti”
}, {
 “id”: 4,
 “name”: “Finding Nemo”
}]

Return the entire array in this api’s response */



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

/* 5. Write api GET /films/:filmId where filmId is the value received in request path params.
 Use this value to return a movie object with this id. In case there is no such movie present in the array,
  return a suitable message in the response body.
   Example for a request GET /films/3 should return the movie object 
{
 “id”: 3,
 “name”: “Rang de Basanti”
}
Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

*/

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