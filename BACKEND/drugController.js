// contactController.js
// Import contact model
Drug = require('./drugModel');

// Handle index actions
exports.index = function (req, res) {
    Drug.get(function (err, drugs) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Drugs retrieved successfully",
            data: drugs
        });
    });
};

// Handle create Drugs actions
exports.new = function (req, res) {
    var drug = new Drug();
    drug.name = req.body.name;
    drug.constituent = req.body.constituent;
    drug.total_count = req.body.total_count;
    drug.price = req.body.price;
    drug.expiry = req.body.expiry
    drug.purpose = req.body.purpose
    // save the Drug and check for errors
    drug.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New Drug created!',
            data: drug
        });
    });
};

// Handle view drug info
exports.view = function (req, res) {
    Drug.findById(req.params.drug_id, function (err, drug) {
        if (err)
            res.send(err);
        res.json({
            message: 'Drug details loading..',
            data: drug
        });
    });
};