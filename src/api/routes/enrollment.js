const { Router } = require('express');
const EnrollmentController = require("../../controllers/enrollmentController");

const router = Router();

router.get('/', EnrollmentController.enrollStudentInACourse);

module.exports = router;