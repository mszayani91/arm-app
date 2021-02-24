const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Receipt = new Schema({
    receipt_label: {
        type: String
    },
    receipt_amount: {
        type: Number
    }
},
    {
        collection: 'receipts'
    })

module.exports = mongoose.model('Receipt', Receipt)