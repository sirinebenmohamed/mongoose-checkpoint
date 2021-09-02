const mongoose = require('mongoose');
const {Schema} = mongoose ;

const PersonSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number},
    favoriteFoods: [String]
})

const PersonDB = mongoose.model("Persons",PersonSchema);

module.exports = PersonDB