// recordsController.js
Record = require('./recordsModel');

// Handle index actions
exports.index = function (req, res) {
    Record.get(function (err, records) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "records retrieved successfully",
            data: records
        });
    });
};

// Handle create Record actions
exports.new = function (req, res) {
    var record = new Record();
    record.patient_name = req.body.patient_name ? req.body.patient_name : record.patient_name;
    record.drug_name = req.body.drug_name ? req.body.drug_name : record.drug_name;
    record.patient_id = req.body.patient_id;
    record.drug_id = req.body.drug_id;
    record.diagnosis = req.body.diagnosis;
    record.counts = req.body.counts
    record.time_stamp = req.body.time_stamp
    record.price = req.body.price
    record.expiry = req.body.expiry
    record.patient_age = req.body.patient_age;
    // save the record and check for errors
    record.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New record created!',
            data: record
        });
    });
};

// Handle view Record info
exports.view = function (req, res) {
    Record.findById(req.params.record_id, function (err, record) {
        if (err)
            res.send(err);
        res.json({
            message: 'Record details loading..',
            data: record
        });
    });
};

//View a specific patient records
exports.viewPatient = function (req, res) {
    Record.find(req.params.patient_id, function (err, record) {
        if (err)
            res.send(err);
        res.json({
            message: 'Patient Record details loading..',
            data: record
        });
    });
};