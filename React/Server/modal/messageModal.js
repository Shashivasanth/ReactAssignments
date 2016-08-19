var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    id: Number,
    subject:String,
    snippet:String,
    fromAddress:String,
    toAddress:String,
    msgDate: String
});

module.exports = mongoose.model('MessageSchema', MessageSchema );
