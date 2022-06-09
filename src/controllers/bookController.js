const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')

const createBook = async function(req, res){
    let bookData = req.body
    //condition-1
    let authorId = bookData.author_id
    if(!authorId) return res.send("Author id is required")
    //condition-2
    let savedAuthData = await authorModel.findById(authorId)
    if(!savedAuthData) return res.send("Invalid author id")
    //condition-3
    let pubId = bookData.publisher_id
    if(!pubId) return res.send("Publisher id is required")
   //condition-4
    let savedPubData = await publisherModel.findById(pubId)
    if(!savedPubData) return res.send("Invalid publisher id")

    let savedData = await bookModel.create(bookData)
    res.send(savedData)
}


const getAllBooks = async function(req, res){
    let savedData = await bookModel.find().populate('author_id publisher_id')
    res.send(savedData)
}

const updateBooks = async function (req, res) {
    // update hardcover to true for few books
    let hardCOverPublishers = await publisherModel.find({ name: { $in: ['Penguin', 'HarperCollins'] } }).select({ _id: 1 })
    let arrayOfPublishers = []

    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id
        arrayOfPublishers.push(objId)
    }

    let books = await bookModel.updateMany({ publisher: { $in: arrayOfPublishers } }, { isHardCover: true })

    res.send({ data: books })
}

module.exports.updateBooks = updateBooks
module.exports.createBook = createBook
module.exports.getAllBooks = getAllBooks