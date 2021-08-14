// drugModel.js
var mongoose = require('mongoose');
// Setup schema
var drugSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    constituent: {
        type: String,
    },
    total_count: {
        type: Number,
    },
    price: {
        type: Number,
    },
    expiry: {
        type: String,
    },
    purpose: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Drug = module.exports = mongoose.model('drugs', drugSchema);
module.exports.get = function (callback, limit) {
    Drug.find(callback).limit(limit);
}