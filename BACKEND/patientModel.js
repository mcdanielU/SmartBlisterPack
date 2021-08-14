// PatientModel.js
var mongoose = require('mongoose');
// Setup schema
var paitentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    medical_id: {
        type: String,
        required: true
    }

});
// Export Contact model
var Patient = module.exports = mongoose.model('patient', paitentSchema);
module.exports.get = function (callback, limit) {
    Patient.find(callback).limit(limit);
}