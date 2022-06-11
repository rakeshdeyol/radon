const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       let playerName = req.body.name;
       let playerData = req.body;
       let nameRepeated = false;
       let newData;
       for(let i=0;i<players.length;i++){
           if(players[i].name==playerName){
               nameRepeated = true;
               break; 
           }
       }
       if(nameRepeated==false){
           players.push(playerData);
           newData =  { data: players , status: true };
       }else{
           newData = { data: players , status: true };
       }
       res.send(newData);
   })
        
   
  
module.exports = router;
