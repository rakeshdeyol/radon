const { set } = require("lodash");

const chunk = function(){
    const months = ['jan','feb','march','april','may','june','july','august','sept','oct','nov','dec'];
     console.log(months.slice(0,4));
     console.log(months.slice(4,8));
     console.log(months.slice(8,12));
     } 

const tail = function(){
    const arrOfOddNumber = [1,3,5,7,9,11,13,17,19,21];
    console.log(arrOfOddNumber.slice(1,10));
}

const union = function(){
    const arr1 = [1,3,5];
    const arr2 = [5,9,7];
    const arr3 = [8,4,5];
    const arr4 = [6,3,11];
    const arr5 = [1,9,7];
    
    let mergeArr = arr1.concat(arr2,arr3,arr4,arr5);
    let uniqueArr =[... new Set(mergeArr)];
    console.log(uniqueArr);
}

const fromPairs = function(){
    let array1 =[]
    var arrayList ={
        
            horror:'The Shining',
            drama: 'Titanic',
            thriller : 'Shutter Island',
            fantasy :'Pans Labyrinth',


        }

        for(let key in arrayList ){
            array1.push([key,arrayList[key]]);

        }
        console.log(array1);

}




     module.exports.chunk = chunk;
     module.exports.tail = tail ;
     module.exports.union = union ;
     module.exports.fromPairs = fromPairs ;