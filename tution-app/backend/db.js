const mongoose = require("mongoose");

// connect the mongoose
// create the schema
// using the model

mongoose.connect("mongodb+srv://krishaagja12:dHEvjeaj8XQgdFQx@cluster0.karuet2.mongodb.net/tution-db")

const createScehma = mongoose.Schema({
    topic: String,
    lason: String,
    checked: Boolean
})

const HM = mongoose.model('HM', createScehma)

module.exports = {
    HM 
}