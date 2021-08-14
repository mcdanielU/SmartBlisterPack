// patientController.js
Patient = require('./patientModel');

// Handle index actions
exports.index = function (req, res) {
    Patient.get(function (err, patients) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "patients retrieved successfully",
            data: patients
        });
    });
};

// Handle create Patient actions
exports.new = function (req, res) {
    var patient = new Patient();
    patient.name = req.body.name ? req.body.name : patient.name;
    patient.age = req.body.age;
    patient.diagnosis = req.body.diagnosis;
    patient.medical_id = req.body.medical_id;

    // save the patient and check for errors
    patient.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New Drug created!',
            data: patient
        });
    });
};

// Handle view drug info
exports.view = function (req, res) {
    Patient.findById(req.params.patient_id, function (err, patient) {
        if (err)
            res.send(err);
        res.json({
            message: 'Patient details loading..',
            data: patient
        });
    });
};