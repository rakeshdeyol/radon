const today = new Date()


const dd = function printDate(){
    return today.getDate();
}

const mm = function printMonth(){
    return today.getMonth() + 1;
}
const batchInfo = function getBatchInfo(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system");
}
module.exports.dd = dd ;
module.exports.mm = mm ;
module.exports.batchInfo = batchInfo ;