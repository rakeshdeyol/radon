const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')


const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({data: savedData})
}

const getAuthorBooks= async function (req, res) {
    
    let savedData= await bookModel.find({authorName:"chetan Bhagat"}).select({authorId:1, _id:0});
    let book = await authorModel.find({authorId:savedData[0].authorId})
    res.send({data:book});
}


module.exports.createAuthor = createAuthor;
module.exports.getAuthorBooks = getAuthorBooks;