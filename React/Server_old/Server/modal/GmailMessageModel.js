var mongoose = require('mongoose');

var GmailMessageSchema = new mongoose.Schema({
    id: String,
    subject:String,
    snippet:String,
    fromAddress:String,
    toAddress:String,
    msgDate: String
});

module.exports = mongoose.model('GmailMessageSchema', GmailMessageSchema );
