const mongoose = require('mongoose');


/* On similar lines as above(today’s mongodb session APIs),
 complete this assignment and submit explainer video for the same
  : Create a bookSchema with bookName, authorName, category and year .
   Create same 2 api's for books i.e. :
    1 api to create a new book and another api to get the list of all books. */


const bookSchema = new mongoose.Schema( {
    bookName:{type:String,
            unique:true,
            require:true
    
    }, 
    authorName:{
        type: String,
        unique: true,
        required: true
    },
    category:{type: String},
    year:{type:String}
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "LGBTQ"] "falana" will give an error
    // },
    // age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users



// String, Number
// Boolean, Object/json, array