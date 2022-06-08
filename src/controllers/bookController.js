const bookModel = require("../models/bookModel")
const authorModel=require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({data: savedData})
}

const getBooksAuthor= async function (req, res) {
    let savedData= await bookModel.findOneAndUpdate( {name:'Two states' },{$set:{price:100}},{new:true} );
    
    let anotherData= await bookModel.find({name:'Two states'}).select({authorId:1, _id:0});
    
    let book = await authorModel.find({authorId:anotherData[0].authorId})
    res.send({data: savedData,book});
}


const bookPrice= async function (req, res) {
    let savedData= await bookModel.find({price:{$gte:50,$lte:100}});
    res.send({data: savedData})
}

module.exports.createBook= createBook
module.exports.getBooksAuthor = getBooksAuthor
module.exports.bookPrice= bookPrice

