const express = require('express');
const receiptRoute = express.Router();

// Add new Receipt
let ReceiptModel = require('../models/receipt');
receiptRoute.route('/add-receipt').post((req, res, next) => {
    ReceiptModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
            console.log(data);
        }
    })
});


// List All Receipts
receiptRoute.route('/receipts').get((req, res) => {
    ReceiptModel.find((error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data);
            console.log(data);

        }
    })
})
module.exports = receiptRoute;