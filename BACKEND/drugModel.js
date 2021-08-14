// drugModel.js
var mongoose = require('mongoose');
// Setup schema
var drugSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    constituent: {
        type: String,
        required: true
    },
    total_count: {
        type: Number,
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
    purpose: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Drug = module.exports = mongoose.model('drug', drugSchema);
module.exports.get = function (callback, limit) {
    Drug.find(callback).limit(limit);
}