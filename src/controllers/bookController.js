const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let list= await BookModel.find( ).select({bookName:1 ,
    authorName:1,_id:0})
    res.send({msg: list})
}

//  { authorName : "Chetan Bhagat" , isPublished: true  }

const getBooksInYear= async function (req, res) {
    let bookYear = req.params.year;
    let saveData= await BookModel.find({year: bookYear} )
    res.send({msg: saveData})
}

const getParticularBooks= async function (req, res) {
    let fetch = req.body
    let saveData= await BookModel.find(fetch)
    res.send({msg: saveData})
}

const getXINRBooks= async function (req, res) {
    let priceData= await BookModel.find({"price.IndianPrice":{$in:["Rs 100","Rs 200","Rs 500"]}});
    res.send({msg: priceData})

}
const getRandomBooks = async function (req, res) {
    let stockData= await BookModel.find({$or:[{stockAvailable:true},{$gt:500}]} );
    res.send({msg: stockData})
}





module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getXINRBooks= getXINRBooks
module.exports.getParticularBooks= getParticularBooks
module.exports.getRandomBooks = getRandomBooks 


// { authorName : "SK" , isPublished: true }

//