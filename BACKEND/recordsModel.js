// recordsModel.js
var mongoose = require('mongoose');
// Setup schema
var recordSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true
    },
    drug_name: {
        type: String,
        required: true
    },
    patient_id: {
        type: String
    },
    drug_id: {
        type: String

    },
    diagnosis: {
        type: String,
        required: true
    },
    counts: {
        type: Number,
        required: true
    },
    time_stamp: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    expiry: {
        type: String,
        required: true
    },
    patient_age: {
        type: Number,
        required: true
    }
});
// Export Contact model
var Record = module.exports = mongoose.model('records', recordSchema);
module.exports.get = function (callback, limit) {
    Record.find(callback).limit(limit);
}