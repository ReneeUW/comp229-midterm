let mongoose = require('mongoose');

// Renee Tang 300986044 
// 01 March 2021
// crearte a model class

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number 
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);