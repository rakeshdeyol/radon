const mongoose = require('mongoose');

/*
Assignment :
Create a books collection in your DB ( using bookModel with following fields)-
 bookName( mandatory field), price containing Indian and european price,
year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

create the following API’s (write logic in bookController and routes in routes):
1. createBook : to create a new entry..use this api to create 11+ entries in your collection
2. bookList : gives all the books- their bookName and authorName only 
3. getBooksInYear: takes year as input in post request and gives list of all books published that year
4. getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
   . e.g if body had { name: “hi”} then you would fetch the books with this name
   .if body had { year: 2020} then you would fetch the books in this year
   .hence the condition will differ based on what you input in the request body
5. getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
6. getRandomBooks - returns books that are available in stock or have more than 500 pages */ 

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
                require:true
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    year : {
        type : Number,
        default : 2021
    }, 
    authorName:{type:String,
                require:true
    } , 
    
    totalPage: String,
    stockAvailable: Boolean,
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

// sales: {type: Number, default: 10}
//isPublished: Boolean,