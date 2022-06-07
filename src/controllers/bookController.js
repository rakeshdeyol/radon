const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find({bookName:" The Guide",
    authorName: " R.K. Narayan "} )
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let allBooks= await BookModel.find({year: 2021} )
    res.send({msg: allBooks})
}

const getParticularBooks= async function (req, res) {
    let allBooks= await BookModel.find( )
    res.send({msg: allBooks})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find( )
    res.send({msg: allBooks})
}

const getRandomBooks = async function (req, res) {
    let allBooks= await BookModel.find( )
    res.send({msg: allBooks})
}





module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks


// { authorName : "SK" , isPublished: true }

//