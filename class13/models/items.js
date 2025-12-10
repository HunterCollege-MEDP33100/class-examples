const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    createdAt: Date,
    value: Number,
})

module.exports = mongoose.model('Items', itemsSchema);