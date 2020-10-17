const { Router } = require('express');
const auth =  require('../middlewares/is-auth');
const EnrollmentController = require("../../controllers/enrollmentController");

const router = Router();

router.get('/', [auth.verifyToken, auth.verifyStudent],EnrollmentController.enrollStudentInACourse);

module.exports = router;