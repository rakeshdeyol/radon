// const endpoint = "https://www.functionup.org"
// const batch = "radon"

const { log } = require("../logger/logger");

// const log = function() {
//     console.log('I am inside the log function')
// }

// module.exports.endpoint = endpoint
// module.exports.batch = batch
// module.exports.log = log


const chunk = function(){
    const months = ['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
    console.log(months.slice(0,4));
    console.log(months.slice(4,8));
    console.log(months.slice(8,12));
}

const tail = function(){
    let arrayOfOddNumbers = [1,3,5,7,9,11,13,15,17,19,21];
    console.log(arrayOfOddNumbers.slice(1,10));
}


const union = function(){
    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,4];
    let arr3 = [11,12,9,5];
    let arr4 = [14,23,33,12];
    let arr5 = [12,22,23,4];

    let newarr = arr1.concat(arr2,arr3,arr4,arr5);
    let uniqueArr =[... new Set(newarr)];
    console.log(uniqueArr);
}

let fromPairs = function(){
    let array = []
    var arrayList={
        thor : "the shining",
        drama :"titanic",
        thriller:"shutter island",
        fantasy:"hero"
    }

    for(let key in arrayList){
        array.push([key,arrayList[key]])
    }
    console.log(array);
}

module.exports.chunk = chunk;
module.exports.tail = tail;
module.exports.union = union;
module.exports.fromPairs = fromPairs;