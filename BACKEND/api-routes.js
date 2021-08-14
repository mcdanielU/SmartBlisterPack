// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Smart Blister Pack crafted with love!'
    });
});

// Import  controllers
var drugController = require('./drugController');
var patientController = require('./patientController');
var recordsController = require('./recordsController');

//  routes
router.route('/drugs')
    .get(drugController.index)
    .post(drugController.new);
router.route('/drugs/:drug_id')
    .get(drugController.view)

router.route('/patients')
    .get(patientController.index)
    .post(patientController.new);
router.route('/patients/:patient_id')
    .get(patientController.view)

router.route('/records')
    .get(recordsController.index)
    .post(recordsController.new);
router.route('/drugs/:record_id')
    .get(recordsController.view)

// Export API routes
module.exports = router;
